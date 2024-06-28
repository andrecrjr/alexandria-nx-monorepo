import { Injectable } from '@nestjs/common';
import { GenreContentDTO } from './dto/genre-content.dto';
import { UpdateGenreContentDto } from './dto/update-genre-content.dto';
import { CreateGenreContentDto } from './dto/create-genre-content.dto';
import { PrismaService } from 'prisma/prisma.service';

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
