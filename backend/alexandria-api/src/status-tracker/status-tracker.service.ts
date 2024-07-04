import { Injectable } from '@nestjs/common';

import { StatusTrackerDTO } from './entities/status-tracker.entity';
import { PrismaService } from 'backend/alexandria-api/prisma/prisma.service';
import { CreateStatusTrackDto, UpdateStatusTrackDto } from '@alexandria/shared-dto-api/status-tracker/statusTracker.dto';

@Injectable()
export class StatusTrackerService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateStatusTrackDto): Promise<StatusTrackerDTO> {
    this.prismaService.statusTrackUser;
    const newData = await this.prismaService.statusTrackUser.create({
      data: data,
    });
    return newData;
  }

  async findAll(): Promise<StatusTrackerDTO[] | null> {
    return await this.prismaService.statusTrackUser.findMany();
  }

  async findOne(id: number): Promise<StatusTrackerDTO | null> {
    return await this.prismaService.statusTrackUser.findFirst({
      where: { id },
    });
  }

  async update(id: number, data: UpdateStatusTrackDto): Promise<boolean> {
    await this.prismaService.statusTrackUser.update({
      where: { id },
      data: data,
    });
    return true;
  }

  async remove(id: number): Promise<boolean> {
    await this.prismaService.statusTrackUser.delete({
      where: { id },
    });
    return true;
  }
}
