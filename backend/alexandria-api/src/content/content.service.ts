import { Injectable } from '@nestjs/common';
import { ContentDTO, CreateContentDTO, UpdateContentDTO } from './content.dto';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'backend/alexandria-api/prisma/prisma.service';
import { JwtDTO } from '../auth/jwt.dto';

@Injectable()
export class ContentService {
  constructor(private readonly prismaService: PrismaService) {}

  convertCreatePrisma(
    data: CreateContentDTO,
    user: JwtDTO,
  ): Prisma.ContentCreateInput {
    const { collections, contentType, authors, genres, ...rest } = data;
    return {
      ...rest,
      createdById: user.sub,
      contentType: contentType
        ? {
            connect: {
              id: contentType.id,
            },
          }
        : undefined,
      collection: collections
        ? {
            connect: collections?.map((items) => ({ id: items.id })),
          }
        : undefined,
      authors: authors
        ? {
            connect: authors?.map((items) => ({ id: items.id })),
          }
        : undefined,
      genres: genres
        ? {
            connect: genres.map((genre) => ({
              id: genre.id,
            })),
          }
        : undefined,
    } as Prisma.ContentCreateInput;
  }

  convertUpdatePrisma(data: UpdateContentDTO): Prisma.ContentUpdateInput {
    const { collections, contentType, authors, genres, ...rest } = data;
    return {
      ...rest,
      contentType: contentType
        ? {
            connect: {
              id: contentType.id,
            },
          }
        : undefined,
      collection: collections
        ? {
            connect: collections?.map((items) => ({ id: items.id })),
          }
        : undefined,
      authors: authors
        ? {
            set: [],
            connect: authors?.map((items) => ({ id: items.id })),
          }
        : undefined,
      genres: genres
        ? {
            set: [],
            connect: genres.map((genre) => ({
              id: genre.id,
            })),
          }
        : undefined,
    } as Prisma.ContentUpdateInput;
  }

  async getUniqueContent(id: number): Promise<ContentDTO> {
    return this.prismaService.content.findFirstOrThrow({
      where: { id: id },
      include: {
        createdBy: {
          select: {
            updatedAt: false,
            createdAt: true,
            username: true,
          },
        },
        contentType: {
          include: {
            statusTracker: true,
          },
        },
        genres: {
          select: {
            id: true,
            name: true,
          },
        },
        series: true,
      },
    });
  }

  async createContent(
    contentData: CreateContentDTO,
    user: JwtDTO,
  ): Promise<ContentDTO> {
    const prismaData = this.convertCreatePrisma(contentData, user);
    const data = await this.prismaService.content.create({
      data: { ...prismaData },
    });
    return data;
  }

  getAllContent(): Promise<ContentDTO[]> {
    return this.prismaService.content.findMany({
      include: {
        authors: true,
        contentType: {
          include: {
            statusTracker: true,
          },
        },
      },
    });
  }

  async updateContent(
    id: number,
    contentData: UpdateContentDTO,
  ): Promise<ContentDTO> {
    const prismaData = this.convertUpdatePrisma(contentData);
    const data = await this.prismaService.content.update({
      where: {
        id,
      },
      data: {
        ...prismaData,
      },
    });
    return data;
  }

  async searchInsideCollectionByContentName(
    query: string,
  ): Promise<ContentDTO[]> {
    const data = await this.prismaService.content.findMany({
      where: {
        title: {
          contains: query,
        },
      },
      include: {
        authors: true,
        contentType: true,
      },
    });
    return data;
  }
}
