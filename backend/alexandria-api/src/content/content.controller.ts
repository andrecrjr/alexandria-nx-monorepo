import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ContentService } from './content.service';
import { CreateContentDTO, UpdateContentDTO } from './content.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '../auth/auth.guard';
import { IRequestJWT } from '../auth/jwt.dto';

@Controller('content')
@ApiTags('Content Creation')
export class ContentController {
  constructor(private readonly contentService: ContentService) {}
  @Get('all')
  getAllContent() {
    return this.contentService.getAllContent();
  }

  @Get(':id')
  getUnique(@Param('id') id: string) {
    return this.contentService.getUniqueContent(parseInt(id));
  }
  @ApiBearerAuth('defaultBearerAuth')
  @Post()
  @UseGuards(AuthGuard)
  createContent(@Body() body: CreateContentDTO, @Request() req: IRequestJWT) {
    return this.contentService.createContent(body, req.user);
  }
  @ApiBearerAuth('defaultBearerAuth')
  @Patch(':id')
  @UseGuards(AuthGuard)
  updateOneContent(@Param('id') id: string, @Body() data: UpdateContentDTO) {
    return this.contentService.updateContent(parseInt(id), data);
  }

  @ApiBearerAuth('defaultBearerAuth')
  @Get('search')
  @UseGuards(AuthGuard)
  searchContentByTitle(@Query('q') query) {
    return this.contentService.searchInsideCollectionByContentName(query);
  }
}
