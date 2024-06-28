import { Injectable } from '@nestjs/common';
import { PrismaService } from 'backend/alexandria-api/prisma/prisma.service';

@Injectable()
export class PaginationService {
  constructor(private readonly prisma: PrismaService) {}

  async getPaginatedData<T>(
    model: string,
    filters: any,
    page = 1,
    limit = 10,
  ): Promise<{ data: T[]; total: number }> {
    const skip = (page - 1) * limit;

    const data = await this.prisma[model].findMany({
      skip,
      take: limit,
      where: filters,
      // Add other options as needed
    });
    const total = await this.prisma[model].count({ where: filters });
    return { data, total };
  }
}
