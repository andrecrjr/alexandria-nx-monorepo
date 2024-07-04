import { OmitType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import { IsDate, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ContentDTO } from '../content/formSchema';
import { ApiProperty } from '@nestjs/swagger';

export class GenreContentDTO {
  @IsInt()
  id: number;

  @IsString()
  name: string;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;

//   @Type(() => SeriesContentDTOForGenre)
//   series?: SeriesContentDTOForGenre[];

  @Type(() => ContentDTO)
  contents?: ContentDTO[];

  @Type(() => ContentDTO)
  genres?: ContentDTO[];
}

// export class GenreContentForSeriesTrackerDTO extends OmitType(GenreContentDTO, [
//   'series',
// ]) {}

export class CreateGenreContentDtoSchema {
  @IsOptional()
  id?: number;

  @IsString()
  @IsNotEmpty()
  name: string;
}

