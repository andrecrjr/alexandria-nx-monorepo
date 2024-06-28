import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SeriesContentService } from './series-content.service';
import { CreateSeriesContentDto } from './dto/create-series-content.dto';
import { UpdateSeriesContentDto } from './dto/update-series-content.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Series Content')
@Controller('series-content')
export class SeriesContentController {
  constructor(private readonly seriesContentService: SeriesContentService) {}

  @Post()
  create(@Body() createSeriesContentDto: CreateSeriesContentDto) {
    try {
      return this.seriesContentService.create(createSeriesContentDto);
    } catch (error) {
      console.log(error);
    }
  }

  @Get()
  findAll() {
    return this.seriesContentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.seriesContentService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSeriesContentDto: UpdateSeriesContentDto,
  ) {
    return this.seriesContentService.update(+id, updateSeriesContentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.seriesContentService.remove(+id);
  }
}
