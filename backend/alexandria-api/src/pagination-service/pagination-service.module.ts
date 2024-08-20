import { Module } from '@nestjs/common';
import { PaginationService } from './pagination-service.service';
import { PrismaService } from 'backend/alexandria-api/prisma/prisma.service';
import { PaginationController } from './pagination-service.controller';

@Module({
  providers: [PrismaService, PaginationService],
  controllers: [PaginationController],
  exports: [PaginationService]
})
export class PaginationServiceModule {}
