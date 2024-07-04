import {
  IsInt,
  IsOptional,
  IsString,
  IsArray,
  ValidateNested,
  IsDate,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateUserDTO } from '../User.dto';
import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';
import { CollectionDTO } from '../../collection/collection';

export class ProfileDTO {
  @IsInt()
  @IsOptional()
  id?: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  bio?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  location?: string;

  @ApiProperty()
  @IsOptional()
  @IsInt()
  age?: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  gender?: string;

  @ApiProperty()
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  interests?: string[];

  @ApiProperty()
  @ValidateNested({ each: true })
  @Type(() => CollectionDTO)
  @IsOptional()
  collections?: CollectionDTO[];

  @IsDate()
  @IsOptional()
  createdAt?: Date;

  @IsDate()
  @IsOptional()
  updatedAt?: Date;

  @IsOptional()
  @IsString()
  userId?: string;

  @IsOptional()
  @Type(() => CreateUserDTO)
  user?: CreateUserDTO;
}

export class UpdateProfileDTO extends PartialType(ProfileDTO) {
  @ApiProperty({ required: true })
  @IsOptional()
  @IsString()
  bio?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  location?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsInt()
  age?: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  gender?: string;

  @ApiProperty({ required: false })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  interests?: string[];

  @IsDate()
  @IsOptional()
  createdAt?: Date = new Date();

  @IsDate()
  @IsOptional()
  updatedAt?: Date = new Date();
}
