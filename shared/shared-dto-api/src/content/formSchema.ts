// import { Type } from "class-transformer";
import {
  IsDate,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested
} from 'class-validator';
import { UserDTO } from '../user/formSchema';
import { GenreIdDTO } from '../genre-content/genre-content.dto';
import { AuthorIdDTO } from '../authors/formSchema';
import { ContentTypeDTO } from '../content-type/formSchema';
import { CollectionDto } from '../collections/formSchema';

export class ContentDTO {
  id: number;
  title: string;
  description: string;
  contentTypeId: number;
  numberPages: number;
  imageUrl?: string;
  contentType?: ContentTypeDTO;

  createdBy?: UserDTO;
  isbn?: string;
  createdById?: number;
  createdAt?: Date;
  updatedAt?: Date;
  collections?: CollectionDto[];
  authors?: AuthorIdDTO[];
  genres?: GenreIdDTO[];
}

export class CreateContentSchemaDTO {
  @IsInt()
  @IsOptional()
  id?: number;

  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsInt()
  @IsOptional()
  contentTypeId: number;

  @IsInt()
  numberPages: number;

  @IsOptional()
  imageUrl?: string;

  @IsOptional()
  contentType?: ContentTypeDTO;

  @ValidateNested({ each: true })
  createdBy?: UserDTO;

  @IsString()
  @IsOptional()
  isbn?: string;

  @IsNumber()
  @IsOptional()
  createdById?: number;

  @IsOptional()
  @IsDate()
  updatedAt?: Date;

  @IsOptional()
  @ValidateNested({ each: true })
  collections?: CollectionDto[];

  @IsOptional()
  authors?: AuthorIdDTO[];

  @IsOptional()
  genres?: GenreIdDTO[];
}
