import { OmitType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import { IsDate, IsInt, IsString } from 'class-validator';
import { ContentDTO } from 'src/content/content.dto';
import { SeriesContentDTOForGenre } from 'src/series-content/entities/series-content.entity';

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
