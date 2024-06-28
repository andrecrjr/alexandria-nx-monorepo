import { Injectable } from '@nestjs/common';
import { CreateAuthorContentDto } from './dto/create-author-content.dto';
import { UpdateAuthorContentDto } from './dto/update-author-content.dto';
import { PrismaService } from 'prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { JwtDTO } from 'src/auth/jwt.dto';
import { ContentIdDTO } from 'src/content/content.dto';
import { AuthorContentDTO } from './entities/author-content.dto';

@Injectable()
export class AuthorContentService {
  constructor(private readonly prismaService: PrismaService) {}

  connectContents(contents?: ContentIdDTO[]) {
    return contents
      ? {
          connect: contents.map((item) => ({
            id: item.id,
          })),
        }
      : undefined;
  }

  connectUser(userId?: number) {
    return userId ? { connect: { id: userId } } : undefined;
  }

  convertAuthorPrisma(
    data: CreateAuthorContentDto,
    user: JwtDTO,
  ): Prisma.AuthorContentCreateInput {
    const { contents, ...rest } = data;
    return {
      ...rest,
      contents: this.connectContents(contents),
      createdBy: this.connectUser(user.sub),
    };
  }

  convertUpdateAuthorPrisma(
    data: UpdateAuthorContentDto,
  ): Prisma.AuthorContentUpdateInput {
    const { contents, createdById, ...rest } = data;
    return {
      ...rest,
      contents: this.connectContents(contents),
      createdBy: this.connectUser(createdById),
    };
  }
  async create(
    createAuthorContentDto: CreateAuthorContentDto,
    user: JwtDTO,
  ): Promise<AuthorContentDTO> {
    const prismaData = this.convertAuthorPrisma(createAuthorContentDto, user);
    const data = await this.prismaService.authorContent.create({
      data: prismaData,
    });
    return data;
  }

  async findAll(): Promise<AuthorContentDTO[]> {
    return await this.prismaService.authorContent.findMany({
      include: {
        createdBy: true,
      },
    });
  }

  async findOne(id: number): Promise<AuthorContentDTO> {
    return await this.prismaService.authorContent.findFirst({
      where: {
        id,
      },
      include: {
        contents: true,
      },
    });
  }

  async update(
    id: number,
    updateAuthorContentDto: UpdateAuthorContentDto,
  ): Promise<AuthorContentDTO> {
    return await this.prismaService.authorContent.update({
      where: {
        id,
      },
      data: this.convertUpdateAuthorPrisma(updateAuthorContentDto),
    });
  }

  async remove(id: number): Promise<boolean> {
    await this.prismaService.authorContent.delete({
      where: {
        id,
      },
    });
    return true;
  }
}
