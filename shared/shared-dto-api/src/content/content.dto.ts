// ContentDTO.ts
import { IsInt, IsString, IsOptional, ValidateNested } from 'class-validator';
import { ApiProperty, PartialType, PickType } from '@nestjs/swagger';
import { ContentDTO, CreateContentSchemaDTO } from './formSchema';
import { UpdateUserProfileDTO } from '../user/users.dto';
import { Type } from 'class-transformer';
import { CollectionDto } from '../collections/formSchema';
import { UserDTO } from '../user/formSchema';
import { ContentTypeDTO } from '../content-type/formSchema';
import { AuthorIdDTO } from '../authors/formSchema';
import { GenreIdDTO } from '../genre-content/genre-content.dto';

export class CreateContentDTO extends CreateContentSchemaDTO {
  @ApiProperty({ description: 'The title of the content.', required: true })
  title: string;

  @ApiProperty({
    description: 'A detailed description of the content.',
    required: true
  })
  description: string;

  @ApiProperty({
    description: 'The identifier for the associated content type.',
    required: true
  })
  contentTypeId: number;

  @ApiProperty({ description: 'The total number of pages in the content.' })
  numberPages: number;

  @ApiProperty({
    description: "The URL of the content's cover image.",
    required: false
  })
  imageUrl?: string;

  @ApiProperty({
    description: `The content type's track for this Content`,
    required: false
  })
  contentType?: ContentTypeDTO;

  @ApiProperty({
    description: `User that created this content`
  })
  createdBy?: UserDTO;

  @ApiProperty({
    description: 'The International Standard Book Number (ISBN).',
    required: false
  })
  isbn?: string;

  @ApiProperty({
    description: 'The identifier of the user who created the content.',
    required: false
  })
  createdById: number;

  createdAt?: Date = new Date();

  updatedAt?: Date = new Date();

  @ApiProperty({
    description: 'The collections to which the content is associated.',
    type: [CollectionDto],
    required: false
  })
  collections?: CollectionDto[];

  @ApiProperty({
    description: 'The authors of the content.',
    type: [AuthorIdDTO],
    required: false
  })
  authors?: AuthorIdDTO[];

  @ApiProperty({
    description: "The genre's content",
    type: [GenreIdDTO],
    required: true
  })
  genres?: GenreIdDTO[];
}

export class UpdateContentDTO extends PartialType(CreateContentSchemaDTO) {
  @ApiProperty({ description: 'The title of the content.', required: false })
  title?: string;

  @ApiProperty({
    description: 'A detailed description of the content.',
    required: false
  })
  description?: string;

  @ApiProperty({
    description: 'The identifier for the associated content type.',
    required: false
  })
  contentType?: ContentTypeDTO;

  @ApiProperty({
    description: 'The total number of pages in the content.',
    required: false
  })
  @IsInt()
  numberPages?: number;

  @ApiProperty({
    description: "The URL of the content's cover image.",
    required: false
  })
  imageUrl?: string;

  @ApiProperty({
    description: 'The International Standard Book Number (ISBN).',
    required: false
  })
  isbn?: string;

  @ApiProperty({
    description: 'The identifier of the user who created the content.',
    required: false
  })
  createdById?: number;

  createdAt?: Date;

  updatedAt: Date;
}

export class ContentIdDTO extends PickType(ContentDTO, ['id']) {
  @IsInt()
  @IsOptional()
  id: number;
}
