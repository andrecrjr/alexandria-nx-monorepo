import { Module } from '@nestjs/common';
import { SeriesContentService } from './series-content.service';
import { SeriesContentController } from './series-content.controller';
import { PrismaService } from 'backend/alexandria-api/prisma/prisma.service';

@Module({
  controllers: [SeriesContentController],
  providers: [SeriesContentService, PrismaService],
})
export class SeriesContentModule {}
