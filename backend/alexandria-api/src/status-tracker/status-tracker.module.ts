import { Module } from '@nestjs/common';
import { StatusTrackerService } from './status-tracker.service';
import { StatusContentypeController } from './status-tracker.controller';
import { PrismaService } from 'backend/alexandria-api/prisma/prisma.service';

@Module({
  controllers: [StatusContentypeController],
  providers: [StatusTrackerService, PrismaService],
})
export class StatusContentypeModule {}
