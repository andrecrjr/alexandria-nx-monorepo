import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsString,
  IsOptional,
  IsArray,
  ValidateNested,
  IsEnum,
} from 'class-validator';
import { ContentTypeIDDTO } from '../../contenttype/contenttype.dto';
import { UserIdDTO } from '../../users/User.dto';
import { AuthorIdDTO } from '../../author-content/entities/author-content.dto';
import { ContentIdDTO } from '../../content/content.dto';
import { GenreIdDTO } from '../../genre-content/dto/create-genre-content.dto';

export class CreateSeriesContentDto {
  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty()
  @IsArray()
  @Type(() => ContentTypeIDDTO)
  category: ContentTypeIDDTO[];

  @ApiProperty()
  @IsOptional()
  @IsString()
  imageUrl?: string;

  @ApiProperty()
  @IsOptional()
  @Type(() => UserIdDTO)
  createdById?: UserIdDTO;

  @IsOptional()
  @ValidateNested()
  @Type(() => AuthorIdDTO) // Specify the nested DTO type
  @ApiProperty({
    description: 'The Authors to which the Series Content is associated.',
    type: [AuthorIdDTO],
    required: false,
  })
  seriesCreator?: AuthorIdDTO[];

  @IsOptional()
  createdAt?: Date; // Prisma handles default for timestamps

  @IsOptional()
  updatedAt?: Date; // Prisma handles default for timestamps

  @ApiProperty({
    description: 'The Contents to which the Series Content is associated.',
    type: [ContentIdDTO],
    required: false,
  })
  @ValidateNested()
  @IsArray()
  @IsOptional()
  @Type(() => ContentIdDTO) // Specify the nested DTO type
  contents?: ContentIdDTO[];

  @ApiProperty({
    description: 'The genres to which the Series content is associated.',
    type: [GenreIdDTO],
    required: false,
  })
  @IsArray()
  @IsOptional()
  @IsEnum(GenreIdDTO, { each: true }) // Validate each item in the array
  genres: GenreIdDTO[];

  @ApiProperty()
  @IsOptional()
  @IsArray()
  @IsString({ each: true }) // Validate each item in the array
  synonyms?: string[];
}
