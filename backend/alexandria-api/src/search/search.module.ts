import { Module } from '@nestjs/common';
import { PrismaService } from 'backend/alexandria-api/prisma/prisma.service';
import { SearchGenericController } from './search.controller';

@Module({
  controllers: [SearchGenericController],
  providers: [PrismaService]
})
export class SearchModule {}
