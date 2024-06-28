// CollectionDTO.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, IsDate, IsOptional } from 'class-validator';

export class CollectionDTO {
  @IsInt()
  id?: number;

  @ApiProperty()
  @IsString()
  name?: string;

  @ApiProperty()
  @IsInt()
  page?: number;

  @ApiProperty()
  @IsInt()
  userId?: number;

  @ApiProperty()
  @IsInt()
  contentId?: number;

  @IsDate()
  createdAt?: Date;

  @IsDate()
  updatedAt?: Date;

  @IsOptional()
  @IsInt()
  profileId?: number;
}
