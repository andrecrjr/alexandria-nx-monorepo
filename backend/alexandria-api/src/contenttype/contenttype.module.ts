import { Module } from '@nestjs/common';
import { ContenttypeController } from './contenttype.controller';
import { ContenttypeService } from './contenttype.service';
import { StatusContentypeModule } from '../status-tracker/status-tracker.module';
import { PrismaService } from 'backend/alexandria-api/prisma/prisma.service';

@Module({
  providers: [ContenttypeService, PrismaService],
  controllers: [ContenttypeController],
  imports: [StatusContentypeModule],
})
export class ContenttypeModule {}
