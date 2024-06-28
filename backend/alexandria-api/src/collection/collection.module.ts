import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CollectionService } from './collection.service';
import { CollectionController } from './collection.controller';

@Module({
  controllers: [CollectionController],
  providers: [PrismaService, CollectionService],
})
export class CollectionModule {}
