import {
  CreateContentTypeDTO,
  UpdateContentTypeDTO
} from '@alexandria/shared-dto-api/content-type/contentType.dto';
import { ContentTypeDTO } from '@alexandria/shared-dto-api/content-type/formSchema';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'backend/alexandria-api/prisma/prisma.service';

@Injectable()
export class ContenttypeService {
  constructor(private readonly prismaService: PrismaService) {}

  private createContentTypePrisma(
    data: CreateContentTypeDTO
  ): Prisma.ContentTypeCreateInput {
    const { contents, statusTracker, ...rest } = data;

    return {
      ...rest,
      contents: {
        connect: contents?.map((item) => ({
          id: item.id
        }))
      },
      statusTracker: {
        connect: statusTracker?.id
          ? {
              id: statusTracker.id
            }
          : undefined
      }
    };
  }

  private updateContentTypePrisma(
    data: UpdateContentTypeDTO
  ): Prisma.ContentTypeUpdateInput {
    const { contents, statusTracker, ...rest } = data;

    return {
      ...rest,
      contents: {
        connect: contents?.map((item) => ({
          id: item.id
        }))
      },
      statusTracker: {
        connect: statusTracker?.id
          ? {
              id: statusTracker.id
            }
          : undefined
      }
    };
  }
  async createContentType(data: CreateContentTypeDTO): Promise<ContentTypeDTO> {
    const prismaData = this.createContentTypePrisma(data);
    const created = await this.prismaService.contentType.create({
      data: prismaData
    });
    return created;
  }

  async updateContentType(
    id: number,
    data: UpdateContentTypeDTO
  ): Promise<ContentTypeDTO> {
    const prismaData = this.updateContentTypePrisma(data);
    const updated = await this.prismaService.contentType.update({
      where: {
        id: id
      },
      data: prismaData
    });
    return updated;
  }

  async getAll(): Promise<ContentTypeDTO[]> {
    const results = await this.prismaService['contentType'].findMany({
      include: {
        statusTracker: true
      }
    });

    return results;
  }
}
