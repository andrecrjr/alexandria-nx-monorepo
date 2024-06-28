import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateUserSchema } from './formSchema';
import { UpdateProfileDTO } from '../profile/profile.dto';

export class CreateUserDTO extends CreateUserSchema {
  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
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
  email: string;

  @ApiProperty({ required: false })
  password: string;

  @ApiProperty({ required: false })
  username: string;

  @ApiProperty({ required: false })
  @Type(() => UpdateProfileDTO)
  profile: UpdateProfileDTO;

  @ApiProperty({ required: false })
  userActive: boolean;
}

export class UserIdDTO {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  id?: number;
}
