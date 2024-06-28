import { Module } from '@nestjs/common';
import { PaginationService } from './pagination-service.service';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  providers: [PrismaService, PaginationService],
  exports: [PaginationService],
})
export class PaginationServiceModule {}
