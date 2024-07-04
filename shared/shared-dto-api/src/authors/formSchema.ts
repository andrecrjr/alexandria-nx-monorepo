import { Type } from 'class-transformer';
import {
  IsOptional,
  IsString,
  IsDateString,
  IsArray,
  IsJSON,
  IsUrl,
  IsInt,
  ValidateNested,
} from 'class-validator';
import { CreateUserSchemaDTO } from '../user/formSchema';

export class AuthorContentDTO {
  @IsInt()
  id?: number;

  @IsString()
  name?: string;

  @IsString()
  @IsOptional()
  bio?: string;

  @IsOptional()
  @IsDateString()
  born?: Date;

  @IsOptional()
  @IsDateString()
  died?: Date;

  @IsOptional()
  @IsString()
  nationality?: string;

  @IsArray()
  @IsOptional()
  @IsString({ each: true })
  awards: string[];

  @IsOptional()
  @IsUrl()
  photoUrl?: string;

  @IsOptional()
  @IsUrl()
  website?: string;

  @IsArray()
  @IsOptional()
  @IsString({ each: true })
  genres: string[];

  @IsOptional()
  @IsJSON()
  socialMedia?: any;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  bestSellers: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  influences: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  influenced: string[];

  @IsOptional()
  @IsInt()
  createdById?: number;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateUserSchemaDTO)
  createdBy?: CreateUserSchemaDTO;
}

export class AuthorIdDTO {
  @IsInt()
  id: number;
}

