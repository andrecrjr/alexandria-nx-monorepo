import {
  IsInt,
  IsOptional,
  IsString,
  IsArray,
  ValidateNested,
  IsDate,
  Min
} from 'class-validator';
// import { Type } from 'class-transformer';
import { CreateUserSchemaDTO } from '../user/formSchema';
import { CollectionDto } from '../collections/formSchema';

export class CreateProfileSchemaDTO {
  @IsInt()
  @IsOptional()
  id?: number;

  @IsOptional()
  @IsString()
  bio?: string;

  @IsOptional()
  @IsString()
  location?: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  age?: number;

  @IsOptional()
  @IsString()
  gender?: string;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  interests?: string[];

  @ValidateNested({ each: true })
  // @Type(() => CollectionDto)
  @IsOptional()
  collections?: CollectionDto[];

  @IsOptional()
  // @Type(() => CreateUserSchemaDTO)
  user?: CreateUserSchemaDTO;
}

export class ProfileDTO {
  id?: number;
  bio?: string;
  location?: string;
  age?: number;
  gender?: string;
  interests?: string[];
  collections?: CollectionDto[];
  user?: CreateUserSchemaDTO;
}

export class UpdateProfileSchemaDTO extends CreateProfileSchemaDTO {}
