import {
  IsDate,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength
} from 'class-validator';
import { ContentDTO } from '../content/formSchema';
export class GenreContentDTO {
  @IsInt()
  id: number;

  @IsString()
  name: string;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;

  //   series?: SeriesContentDTOForGenre[];
  contents?: ContentDTO[];

  genres?: ContentDTO[];
}

export class CreateGenreContentDtoSchema {
  @IsOptional()
  id?: number;

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  name: string;
}
