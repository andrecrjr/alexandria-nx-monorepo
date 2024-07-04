import { Injectable } from '@nestjs/common';
import { PrismaService } from 'backend/alexandria-api/prisma/prisma.service';
import { CreateGenreContentDto, UpdateGenreContentDto } from '@alexandria/shared-dto-api/genre-content/genre-content.dto';
import { GenreContentDTO } from '@alexandria/shared-dto-api/genre-content/formSchema';

@Injectable()
export class GenreContentService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateGenreContentDto): Promise<GenreContentDTO> {
    return this.prisma.genre.create({ data });
  }

  async findAll(): Promise<GenreContentDTO[]> {
    return this.prisma.genre.findMany({});
  }

  async findOne(id: number): Promise<GenreContentDTO | null> {
    return this.prisma.genre.findUnique({
      where: { id },
      include: {
        content: true,
        series: true,
      },
    });
  }

  async update(
    id: number,
    data: UpdateGenreContentDto,
  ): Promise<GenreContentDTO | null> {
    return this.prisma.genre.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<GenreContentDTO | null> {
    return this.prisma.genre.delete({ where: { id } });
  }
}
