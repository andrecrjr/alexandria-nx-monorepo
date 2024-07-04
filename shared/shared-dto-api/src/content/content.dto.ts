// ContentDTO.ts
import {
  IsInt,
  IsString,
  IsOptional,
  IsDate,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty, PartialType, PickType } from '@nestjs/swagger';
import { ContentDTO, CreateContentSchemaDTO } from './formSchema';
import { UpdateUserProfileDTO } from '../user/users.dto';


export class CreateContentDTO extends CreateContentSchemaDTO {
  @IsString()
  @ApiProperty({
    description: 'The International Standard Book Number (ISBN).',
    required: false,
  })
  isbn?: string;
  @IsOptional()
  @IsString()
  @ApiProperty({
    description: 'The identifier of the user who created the content.',
    required: true,
  })
  createdById: number;
}

export class UpdateContentDTO extends PartialType(CreateContentSchemaDTO) {
  @ApiProperty({ description: 'The title of the content.', required: false })
  title?: string;

  @ApiProperty({
    description: 'A detailed description of the content.',
    required: false,
  })
  description?: string;

  @ApiProperty({
    description: 'The identifier for the associated content type.',
    required: false,
  })
  contentTypeId?: number;

  @ApiProperty({
    description: 'The total number of pages in the content.',
    required: false,
  })
  @IsInt()
  numberPages?: number;

  @ApiProperty({
    description: "The URL of the content's cover image.",
    required: false,
  })
  imageUrl?: string;

  @ApiProperty({
    description: 'The International Standard Book Number (ISBN).',
    required: false,
  })
  isbn?: string;

  @ApiProperty({
    description: 'The identifier of the user who created the content.',
    required: false,
  })
  createdById?: number;

  @ApiProperty({
    description: 'The identifier of the user who created the content.',
    required: false,
  })
  @IsOptional()
  createdBy?: UpdateUserProfileDTO;

  createdAt?: Date;

  updatedAt: Date;
}

export class ContentIdDTO extends PickType(ContentDTO, ['id']) {
  @IsInt()
  @IsOptional()
  @ApiProperty({ required: false })
  id: number;
}
