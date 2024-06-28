import { Module } from '@nestjs/common';
import { GenreContentService } from './genre-content.service';
import { GenreContentController } from './genre-content.controller';
import { PrismaService } from 'backend/alexandria-api/prisma/prisma.service';

@Module({
  controllers: [GenreContentController],
  providers: [GenreContentService, PrismaService],
})
export class GenreContentModule {}
