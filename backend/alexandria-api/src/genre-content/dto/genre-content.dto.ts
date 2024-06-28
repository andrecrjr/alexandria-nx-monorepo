import { OmitType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import { IsDate, IsInt, IsString } from 'class-validator';
import { SeriesContentDTOForGenre } from '../../series-content/entities/series-content.entity';
import { ContentDTO } from '../../content/content.dto';

export class GenreContentDTO {
  @IsInt()
  id: number;

  @IsString()
  name: string;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;

  @Type(() => SeriesContentDTOForGenre)
  series?: SeriesContentDTOForGenre[];

  @Type(() => ContentDTO)
  contents?: ContentDTO[];

  @Type(() => ContentDTO)
  genres?: GenreContentDTO[];
}

export class GenreContentForSeriesTrackerDTO extends OmitType(GenreContentDTO, [
  'series',
]) {}
