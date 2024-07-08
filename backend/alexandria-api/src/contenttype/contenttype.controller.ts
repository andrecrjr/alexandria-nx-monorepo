import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UseGuards
} from '@nestjs/common';
import { ContenttypeService } from './contenttype.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '../auth/auth.guard';
import {
  UpdateContentTypeDTO,
  CreateContentTypeDTO
} from '@alexandria/shared-dto-api/content-type/contentType.dto';

@Controller('contenttype')
@ApiTags('Content Types for Content')
export class ContenttypeController {
  constructor(private readonly contentTypeService: ContenttypeService) {}
  @ApiBearerAuth('defaultBearerAuth')
  @Post()
  @UseGuards(AuthGuard)
  createType(@Body() data: CreateContentTypeDTO) {
    return this.contentTypeService.createContentType(data);
  }

  @Get()
  get() {
    return this.contentTypeService.getAll();
  }

  @Patch(':id')
  updateType(@Body() data: UpdateContentTypeDTO, @Param('id') id: string) {
    return this.contentTypeService.updateContentType(parseInt(id), data);
  }
}
