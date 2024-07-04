// ContentTypeDTO.ts
import {
  IsInt,
  IsOptional,
  IsString,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { PartialType } from '@nestjs/swagger';
import { ContentIdDTO } from '../content/content.dto';

export class ContentTypeDTO {
  id: number;
  title: string;
  description: string;
  contents?: ContentIdDTO[];
//   statusTracker?: StatusTrackIdDTO;
  statusTrackerId: number;
}

export class CreateContentTypeSchemaDTO extends ContentTypeDTO {
  @IsInt()
  @IsOptional()
  id: number;

  @IsString()
  @MinLength(0)
  title: string;

  @IsString()
  @IsOptional()
  @MinLength(10)
  description: string;

  @ValidateNested({ each: true })
  @Type(() => ContentIdDTO)
  contents: ContentIdDTO[];

//   @ApiProperty({ required: true })
//   @Type(() => StatusTrackIdDTO)
//   statusTracker: StatusTrackIdDTO;

  statusTrackerId: number;
}

export class UpdateContentTypeDTO extends PartialType(ContentTypeDTO) {}

export class ContentTypeIDDTO {
  @IsInt()
  id: number;
}
