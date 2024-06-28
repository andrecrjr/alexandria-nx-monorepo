import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { CreateSeriesContentDto } from './dto/create-series-content.dto';
import { UpdateSeriesContentDto } from './dto/update-series-content.dto';
import { SeriesContentDTOForGenre } from './entities/series-content.entity';

@Injectable()
export class SeriesContentService {
  constructor(private prisma: PrismaService) {}

  convertPrismaData(
    data: CreateSeriesContentDto,
  ): Prisma.SeriesContentCreateInput {
    const { category, seriesCreator, contents, genres, ...rest } = data;
    return {
      ...rest,
      category: category
        ? {
            connect: category?.map((item) => ({ id: item.id })),
          }
        : undefined,
      seriesCreator: seriesCreator
        ? {
            connect: seriesCreator.map((item) => ({ id: item.id })),
          }
        : undefined,
      contents: contents
        ? {
            connect: contents.map((item) => ({ id: item.id })),
          }
        : undefined,
      genres: genres
        ? {
            connect: genres.map((item) => ({ id: item.id })),
          }
        : undefined,
    };
  }

  convertUpdatePrisma(
    data: UpdateSeriesContentDto,
  ): Prisma.SeriesContentUpdateInput {
    const { category, seriesCreator, contents, genres, ...rest } = data;
    return {
      ...rest,
      category: category
        ? {
            connect: category?.map((item) => ({ id: item.id })),
          }
        : undefined,
      seriesCreator: seriesCreator
        ? {
            connect: seriesCreator.map((item) => ({ id: item.id })),
          }
        : undefined,
      contents: contents
        ? {
            connect: contents.map((item) => ({ id: item.id })),
          }
        : undefined,
      genres: genres
        ? {
            connect: genres.map((item) => ({ id: item.id })),
          }
        : undefined,
    };
  }

  async create(
    data: CreateSeriesContentDto,
  ): Promise<SeriesContentDTOForGenre | null> {
    const prismaData = this.convertPrismaData(data);
    return await this.prisma.seriesContent.create({
      data: prismaData,
    });
  }

  async findAll(): Promise<SeriesContentDTOForGenre[] | null> {
    const data = await this.prisma.seriesContent.findMany({
      include: {
        category: true,
      },
    });
    return data;
  }

  async findOne(id: number): Promise<SeriesContentDTOForGenre | null> {
    return await this.prisma.seriesContent.findUnique({
      where: { id },
      include: {
        contents: true,
      },
    });
  }

  async update(
    id: number,
    data: UpdateSeriesContentDto,
  ): Promise<SeriesContentDTOForGenre | null> {
    const prismaData = this.convertUpdatePrisma(data);
    return await this.prisma.seriesContent.update({
      where: { id },
      data: prismaData,
    });
  }

  async remove(id: number): Promise<SeriesContentDTOForGenre | null> {
    return await this.prisma.seriesContent.delete({
      where: { id },
    });
  }
}
