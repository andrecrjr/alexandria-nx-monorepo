import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { ProfileDTO, UpdateProfileDTO } from './profile/profile.dto';
import { Type } from 'class-transformer';
import {postAuthorUser} from "@alexandria/shared-dto-api/lib/"

export class UserDTO {
  id?: number;

  @IsEmail()
  email?: string;

  @IsString()
  password?: string;

  @IsString()
  username?: string;

  @Type(() => ProfileDTO)
  profile?: ProfileDTO;

  @IsBoolean()
  @IsOptional()
  userActive?: boolean = true;
}
export class CreateUserDTO {
  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @MinLength(6)
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  @MinLength(5)
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsOptional()
  @ApiProperty({ required: false })
  @Type(() => UpdateProfileDTO)
  profile?: UpdateProfileDTO;

  @IsBoolean()
  @IsOptional()
  userActive: boolean;
}

export class UpdateUserProfileDTO extends PartialType(CreateUserDTO) {
  @ApiProperty({ required: false })
  @IsEmail()
  @IsOptional()
  email: string;

  @ApiProperty({ required: false })
  @MinLength(6)
  @IsOptional()
  password: string;

  @ApiProperty({ required: false })
  @MinLength(5)
  @IsString()
  @IsOptional()
  username: string;

  @IsOptional()
  @ApiProperty({ required: false })
  @Type(() => UpdateProfileDTO)
  @IsOptional()
  profile: UpdateProfileDTO;

  @IsBoolean()
  @IsOptional()
  @ApiProperty({ required: false })
  userActive: boolean;
}

export class UserIdDTO {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  id?: number;
}


export const AuthUserDTO = postAuthUser(ApiProperty);
export class AuthUserDTOBody extends AuthUserDTO {}