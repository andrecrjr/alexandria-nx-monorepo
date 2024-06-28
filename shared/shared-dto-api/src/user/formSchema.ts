import {
  IsBoolean,
  IsEmail,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateProfileSchema } from '../profile/formSchema';

export class CreateUserSchema {
  id?: number;

  @IsEmail()
  email?: string;

  @IsString()
  password?: string;

  @IsString()
  @MinLength(5)
  username?: string;

  @IsOptional()
  @Type(() => CreateProfileSchema)
  profile?: CreateProfileSchema;

  @IsBoolean()
  @IsOptional()
  userActive?: boolean = true;
}