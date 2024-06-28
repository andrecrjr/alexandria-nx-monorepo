import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthorContentService } from './author-content.service';
import { CreateAuthorContentDto } from './dto/create-author-content.dto';
import { UpdateAuthorContentDto } from './dto/update-author-content.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from "../auth/auth.guard"

@Controller('author-content')
@ApiTags('Content Creator or Author')
export class AuthorContentController {
  constructor(private readonly authorContentService: AuthorContentService) {}

  @Post()
  @UseGuards(AuthGuard)
  create(
    @Body() createAuthorContentDto: CreateAuthorContentDto,
    @Request() req,
  ) {
    return this.authorContentService.create(createAuthorContentDto, req);
  }

  @Get()
  @UseGuards(AuthGuard)
  findAll() {
    return this.authorContentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authorContentService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  update(
    @Param('id') id: string,
    @Body() updateAuthorContentDto: UpdateAuthorContentDto,
  ) {
    return this.authorContentService.update(+id, updateAuthorContentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authorContentService.remove(+id);
  }
}
