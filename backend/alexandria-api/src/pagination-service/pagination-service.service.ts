import { EntityDatabase } from '@alexandria/shared-dto-api/enums';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'backend/alexandria-api/prisma/prisma.service';
// Define a union type of all model names available in Prisma
export type ModelNames =
  (typeof Prisma.ModelName)[keyof typeof Prisma.ModelName];

// Define a type for Prisma operations specific to a given model
type PrismaOperations<ModelName extends ModelNames> =
  Prisma.TypeMap['model'][ModelName]['operations'];

// Define a type for Prisma findMany arguments specific to a given model
type PrismaFindManyArgs<ModelName extends ModelNames> =
  PrismaOperations<ModelName>['findMany']['args'];

@Injectable()
export class PaginationService {
  constructor(private readonly prisma: PrismaService) {}

  async getPaginatedData<T>(
    model: string,
    filters: PrismaFindManyArgs<ModelNames>,
    page = 1,
    limit = 10
  ): Promise<{
    data: T[];
    total: number;
    nextPage: number | null;
    previousPage: number | null;
    totalPages: number;
  }> {
    const skip = (page - 1) * limit;

    const data = await this.prisma[model].findMany({
      skip,
      take: limit,
      where: filters
      // Add other options as needed
    });
    const total = await this.prisma[model].count({ where: filters });
    const totalPages = Math.ceil(total / limit);

    const nextPage = page < totalPages ? page + 1 : null;
    const previousPage = page > 1 ? page - 1 : null;
    return { data, total, nextPage, previousPage, totalPages };
  }
}
