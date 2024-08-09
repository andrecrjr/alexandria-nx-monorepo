// ContentTypeDTO.ts
import {
  IsInt,
  IsOptional,
  IsString,
  MinLength,
  ValidateNested
} from 'class-validator';
// import { Type } from 'class-transformer';
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
  @MinLength(10)
  description: string;

  @ValidateNested({ each: true })
  contents: ContentIdDTO[];
  
  statusTrackerId: number;
}

export class ContentTypeIDDTO {
  @IsInt()
  id: number;
}
