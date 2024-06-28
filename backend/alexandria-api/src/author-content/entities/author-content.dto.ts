import { PickType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
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
import { CreateUserDTO } from '../../users/User.dto';

export class AuthorContentDTO {
  @IsOptional()
  @IsInt()
  id: number;

  @ApiProperty()
  @IsString()
  name?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  bio?: string;

  @ApiProperty()
  @IsOptional()
  @IsDateString()
  born?: Date;

  @ApiProperty()
  @IsOptional()
  @IsDateString()
  died?: Date;

  @ApiProperty()
  @IsOptional()
  @IsString()
  nationality?: string;

  @ApiProperty()
  @IsArray()
  @IsOptional()
  @IsString({ each: true })
  awards: string[];

  @ApiProperty()
  @IsOptional()
  @IsUrl()
  photoUrl?: string;

  @ApiProperty()
  @IsOptional()
  @IsUrl()
  website?: string;

  @ApiProperty()
  @IsArray()
  @IsOptional()
  @IsString({ each: true })
  genres: string[];

  @ApiProperty()
  @IsOptional()
  @IsJSON()
  socialMedia?: any;

  @ApiProperty()
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  bestSellers: string[];

  @ApiProperty()
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  influences: string[];

  @ApiProperty()
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  influenced: string[];

  @IsOptional()
  @IsInt()
  createdById?: number;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateUserDTO)
  createdBy?: CreateUserDTO;
}

export class AuthorIdDTO extends PickType(AuthorContentDTO, ['id'] as const) {
  @IsInt()
  @ApiProperty()
  id: number;
}
