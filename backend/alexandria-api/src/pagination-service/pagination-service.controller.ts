import {
  Controller,
  Get,
  Query,
  Param,
  ParseIntPipe,
  DefaultValuePipe
} from '@nestjs/common';
import { PaginationService } from './pagination-service.service';

@Controller('pagination')
export class PaginationController {
  constructor(private readonly paginationService: PaginationService) {}

  @Get(':model')
  async getPaginatedData(
    @Param('model') model: string,
    @Query('filters') filters: any,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number
  ) {
    return this.paginationService.getPaginatedData(model, filters, page, limit);
  }
}
