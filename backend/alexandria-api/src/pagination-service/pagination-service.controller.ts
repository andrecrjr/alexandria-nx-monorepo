import { Controller, Get, Query, Param, ParseIntPipe } from '@nestjs/common';
import { PaginationService } from './pagination-service.service';

@Controller('pagination')
export class PaginationController {
  constructor(private readonly paginationService: PaginationService) {}

  @Get(':model')
  async getPaginatedData(
    @Param('model') model: string,
    @Query('filters') filters: any,
    @Query('page', ParseIntPipe) page = 1,
    @Query('limit', ParseIntPipe) limit = 10
  ) {
    return this.paginationService.getPaginatedData(model, filters, page, limit);
  }
}
