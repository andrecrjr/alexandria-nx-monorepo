import { PickType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateGenreContentDto {
  @IsOptional()
  id?: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;
}

export class GenreIdDTO extends PickType(CreateGenreContentDto, ['id']) {
  @IsInt()
  @IsOptional()
  @ApiProperty({ required: false })
  id: number;
}
