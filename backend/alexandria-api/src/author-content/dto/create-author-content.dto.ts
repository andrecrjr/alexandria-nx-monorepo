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
import { UserIdDTO } from '../../users/User.dto';
import { ContentIdDTO } from '../../content/content.dto';

export class CreateAuthorContentDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty({ required: true })
  @IsString()
  bio?: string;

  @ApiProperty({ required: true })
  @IsOptional()
  @IsDateString()
  born?: Date;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsDateString()
  died?: Date;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  nationality?: string;

  @ApiProperty({ required: false })
  @IsArray()
  @IsOptional()
  @IsString({ each: true })
  awards?: string[];

  @ApiProperty({ required: false })
  @IsOptional()
  @IsUrl()
  photoUrl?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsUrl()
  website?: string;

  @ApiProperty({ required: true })
  @IsArray()
  @IsString({ each: true })
  genres: string[];

  @ApiProperty({ required: false })
  @IsOptional()
  @IsJSON()
  socialMedia?: any;

  @ApiProperty({ required: false })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  bestSellers?: string[];

  @ApiProperty({ required: false })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  influences?: string[];

  @ApiProperty({ required: false })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  influenced?: string[];

  @ApiProperty({ required: true })
  @IsInt()
  createdById?: number;

  @ValidateNested({ each: true })
  @Type(() => UserIdDTO)
  @IsOptional()
  @ApiProperty({ type: [UserIdDTO] })
  createdBy: UserIdDTO;

  @ApiProperty({ required: false, type: [ContentIdDTO] })
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => ContentIdDTO)
  contents: ContentIdDTO[];
}
