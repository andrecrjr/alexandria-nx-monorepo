import { PartialType } from '@nestjs/swagger';
import { CreateGenreContentDto } from './create-genre-content.dto';

export class UpdateGenreContentDto extends PartialType(CreateGenreContentDto) {}
