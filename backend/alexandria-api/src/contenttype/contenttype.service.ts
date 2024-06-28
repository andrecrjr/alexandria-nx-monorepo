import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { ContentTypeDTO, CreateContentTypeDTO } from './contenttype.dto';

@Injectable()
export class ContenttypeService {
  constructor(private readonly prismaService: PrismaService) {}

  createContentTypePrisma(
    data: CreateContentTypeDTO,
  ): Prisma.ContentTypeCreateInput {
    const { contents, statusTracker, ...rest } = data;

    return {
      ...rest,
      contents: {
        connect: contents?.map((item) => ({
          id: item.id,
        })),
      },
      statusTracker: {
        connect: statusTracker?.id
          ? {
              id: statusTracker.id,
            }
          : undefined,
      },
    };
  }
  async createContentType(data: CreateContentTypeDTO): Promise<ContentTypeDTO> {
    const prismaData = this.createContentTypePrisma(data);
    const created = await this.prismaService.contentType.create({
      data: prismaData,
    });
    return created;
  }

  async getAll(): Promise<ContentTypeDTO[]> {
    // const page = parseInt('0') || 0;
    // const limit = parseInt('10') || 10;

    const results = await this.prismaService['contentType'].findMany({
      include: {
        statusTracker: true,
      },
    });

    // const results = await this.prismaService['contentType'].findMany({
    //   take: limit,
    //   skip: page * limit,
    //   include: {
    //     statusTracker: true,
    //   },
    // });

    // // const count = await this.prismaService['contentType'].count();
    // // const totalPages = Math.ceil(count / limit);
    // // // Aqui você pode adicionar lógica para calcular o total de páginas, etc.
    // // const paginationResult = {
    // //   data: results,
    // //   page: page + 1,
    // //   limit,
    // //   // total, totalPages, etc.
    // //   count,
    // //   totalPages,
    // //   next: totalPages > page ? page + 1 : null,
    // //   prev: totalPages < page ? page - 1 : null,
    // // };

    // return paginationResult;
    return results;
  }
}
