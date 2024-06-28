import { Module } from '@nestjs/common';
import { CollectionService } from './collection.service';
import { CollectionController } from './collection.controller';
import { PrismaService } from 'backend/alexandria-api/prisma/prisma.service';

@Module({
  controllers: [CollectionController],
  providers: [PrismaService, CollectionService],
})
export class CollectionModule {}
