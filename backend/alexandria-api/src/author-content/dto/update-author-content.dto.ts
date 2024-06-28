import { PartialType } from '@nestjs/swagger';
import { CreateAuthorContentDto } from './create-author-content.dto';

export class UpdateAuthorContentDto extends PartialType(
  CreateAuthorContentDto,
) {}
