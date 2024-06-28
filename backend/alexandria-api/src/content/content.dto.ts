// ContentDTO.ts
import {
  IsInt,
  IsString,
  IsOptional,
  IsDate,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CollectionDTO } from 'src/collection/collection';
import { ContentTypeDTO } from 'src/contenttype/contenttype.dto';
import { ApiProperty } from '@nestjs/swagger';
import { AuthorIdDTO } from 'src/author-content/entities/author-content.dto';
import { PartialType, PickType } from '@nestjs/mapped-types';
import { GenreIdDTO } from 'src/genre-content/dto/create-genre-content.dto';
import { UpdateUserProfileDTO, UserDTO } from 'src/users/User.dto';

export class ContentDTO {
  @IsInt()
  @IsOptional()
  id: number;

  @IsString()
  @ApiProperty({ description: 'The title of the content.', required: true })
  title: string;

  @IsString()
  @ApiProperty({
    description: 'A detailed description of the content.',
    required: true,
  })
  description: string;

  @IsInt()
  @IsOptional()
  @ApiProperty({
    description: 'The identifier for the associated content type.',
    required: true,
  })
  contentTypeId: number;

  @IsInt()
  @ApiProperty({ description: 'The total number of pages in the content.' })
  numberPages: number;

  @IsOptional()
  @ApiProperty({
    description: "The URL of the content's cover image.",
    required: false,
  })
  imageUrl?: string;

  @IsOptional()
  @ApiProperty({
    description: `The content type's track for this Content`,
  })
  @ValidateNested({ each: true })
  @Type(() => ContentTypeDTO)
  contentType?: ContentTypeDTO;

  @ApiProperty({
    description: `User that created this content`,
  })
  @ValidateNested({ each: true })
  @Type(() => UserDTO)
  createdBy?: UserDTO;

  @IsOptional()
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
    required: false,
  })
  createdById: number;

  @IsOptional()
  @IsDate()
  createdAt?: Date = new Date();

  @IsOptional()
  @IsDate()
  updatedAt?: Date = new Date();

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CollectionDTO)
  @ApiProperty({
    description: 'The collections to which the content is associated.',
    type: [CollectionDTO],
    required: false,
  })
  collections?: CollectionDTO[];

  @IsOptional()
  @ApiProperty({
    description: 'The authors of the content.',
    type: [AuthorIdDTO],
    required: false,
  })
  @Type(() => AuthorIdDTO)
  authors?: AuthorIdDTO[];

  @IsOptional()
  @ApiProperty({
    description: "The genre's content",
    type: [GenreIdDTO],
    required: true,
  })
  genres?: GenreIdDTO[];
}

export class CreateContentDTO extends ContentDTO {
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

export class UpdateContentDTO extends PartialType(ContentDTO) {
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
