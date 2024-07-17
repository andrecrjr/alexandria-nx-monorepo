import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength
} from 'class-validator';
// import { Type } from 'class-transformer';
import { CreateProfileSchemaDTO } from '../profile/formSchema';

export class CreateUserSchemaDTO {
  id?: number;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  username: string;

  @IsOptional()
  // @Type(() => CreateProfileSchemaDTO)
  profile?: CreateProfileSchemaDTO;

  @IsBoolean()
  @IsOptional()
  userActive?: boolean = true;
}

export class UserDTO {
  id?: number;
  email?: string;
  password?: string;
  username?: string;
  profile?: CreateProfileSchemaDTO;
  userActive?: boolean = true;
}
