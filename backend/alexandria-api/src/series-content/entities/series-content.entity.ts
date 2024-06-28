import { IsArray, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ContentDTO } from 'src/content/content.dto';
import { AuthorContentDTO } from 'src/author-content/entities/author-content.dto';
import { ContentTypeDTO } from 'src/contenttype/contenttype.dto';
import { GenreContentForSeriesTrackerDTO } from 'src/genre-content/dto/genre-content.dto';

export class SeriesContentDTO {
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsArray()
  category: ContentTypeDTO[];

  @IsOptional()
  @IsString()
  imageUrl?: string;

  @IsOptional()
  createdBy?: number;

  @ValidateNested()
  @Type(() => AuthorContentDTO) // Specify the nested DTO type
  seriesCreator?: AuthorContentDTO[];

  @IsOptional()
  createdAt?: Date; // Prisma handles default for timestamps

  @IsOptional()
  updatedAt?: Date; // Prisma handles default for timestamps

  @ValidateNested()
  @IsArray()
  @Type(() => ContentDTO) // Specify the nested DTO type
  contents?: ContentDTO[];

  @IsArray()
  genres: GenreContentForSeriesTrackerDTO[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true }) // Validate each item in the array
  synonyms?: string[];
}

export class SeriesContentDTOForGenre {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  imageUrl?: string;

  @IsOptional()
  createdBy?: number; // Assuming User.id is a number

  @ValidateNested()
  @Type(() => AuthorContentDTO) // Specify the nested DTO type
  seriesCreator?: AuthorContentDTO[];

  @IsOptional()
  createdAt?: Date; // Prisma handles default for timestamps

  @IsOptional()
  updatedAt?: Date; // Prisma handles default for timestamps

  @ValidateNested()
  @IsArray()
  @Type(() => ContentDTO) // Specify the nested DTO type
  contents?: ContentDTO[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true }) // Validate each item in the array
  synonyms?: string[];
}
