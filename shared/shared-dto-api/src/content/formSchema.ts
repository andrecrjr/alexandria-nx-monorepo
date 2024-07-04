import { Type } from "class-transformer";
import { IsDate, IsInt, IsOptional, IsString, ValidateNested } from "class-validator";
import { UserDTO } from "../user/formSchema";
import { GenreIdDTO } from "../genre-content/genre-content.dto";
import { AuthorIdDTO } from "../authors/formSchema";
import { ContentTypeDTO } from "../contentType/formSchema";

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
  createdById: number;
  createdAt?: Date = new Date();
  updatedAt?: Date = new Date();

//   collections?: CollectionDTO[];

  authors?: AuthorIdDTO[];

  genres?: GenreIdDTO[];
}


export class CreateContentSchemaDTO {
  @IsInt()
  @IsOptional()
  id?: number;

  @IsString()
  title?: string;

  @IsString()
  description: string;

  @IsInt()
  @IsOptional()
  contentTypeId: number;

  @IsInt()
  numberPages: number;

  @IsOptional()
  imageUrl?: string;

//   @IsOptional()
//   @ValidateNested({ each: true })
//   @Type(() => ContentTypeDTO)
//   contentType?: ContentTypeDTO;

  @ValidateNested({ each: true })
  @Type(() => UserDTO)
  createdBy?: UserDTO;

  @IsOptional()
  @IsString()
  isbn?: string;

  @IsOptional()
  @IsString()
  createdById: number;

  @IsOptional()
  @IsDate()
  createdAt?: Date = new Date();

  @IsOptional()
  @IsDate()
  updatedAt?: Date = new Date();

//   @IsOptional()
//   @ValidateNested({ each: true })
//   @Type(() => CollectionDTO)
//   @ApiProperty({
//     description: 'The collections to which the content is associated.',
//     type: [CollectionDTO],
//     required: false,
//   })
//   collections?: CollectionDTO[];

  @IsOptional()
  @Type(() => AuthorIdDTO)
  authors?: AuthorIdDTO[];

  @IsOptional()
  genres?: GenreIdDTO[];
}