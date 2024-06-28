import { Module } from '@nestjs/common';
import { AuthorContentService } from './author-content.service';
import { AuthorContentController } from './author-content.controller';
import { PrismaService } from 'backend/alexandria-api/prisma/prisma.service';

@Module({
  controllers: [AuthorContentController],
  providers: [AuthorContentService, PrismaService],
})
export class AuthorContentModule {}
