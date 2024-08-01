// generic.controller.ts

import { Controller, Get, Query } from '@nestjs/common';
import { PrismaService } from 'backend/alexandria-api/prisma/prisma.service';
import { EntityDatabase } from '@alexandria/shared-dto-api/enums/';

@Controller('search')
export class SearchGenericController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get()
  async findMany(
    @Query('entity') entity: EntityDatabase,
    @Query('field') field: string,
    @Query('value') value: string
  ) {
    try {
      const result = await this.prismaService[entity].findMany({
        where: {
          [field]: {
            contains: value,
            mode: 'insensitive'
          }
        }
      });
      return result;
    } catch (error) {
      throw new Error(`Erro ao buscar dados para a entidade ${entity}.`);
    }
  }
}
