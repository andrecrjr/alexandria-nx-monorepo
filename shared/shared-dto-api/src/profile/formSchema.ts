import {
  IsInt,
  IsOptional,
  IsString,
  IsArray,
  ValidateNested,
  IsDate,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateUserSchema } from '../user/formSchema';

export class CreateProfileSchema {
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
  age?: number;

  @IsOptional()
  @IsString()
  gender?: string;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  interests?: string[];

//   @ValidateNested({ each: true })
//   @Type(() => CollectionDTO)
//   @IsOptional()
//   collections?: CollectionDTO[];

  @IsDate()
  @IsOptional()
  createdAt?: Date;

  @IsOptional()
  @IsDate()
  updatedAt?: Date;

  @IsOptional()
  @IsString()
  userId?: string;

  @IsOptional()
  @Type(() => CreateUserSchema)
  user?: CreateUserSchema;
}