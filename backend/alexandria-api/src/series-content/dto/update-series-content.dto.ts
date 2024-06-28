import { PartialType } from '@nestjs/swagger';
import { CreateSeriesContentDto } from './create-series-content.dto';
import { IsArray, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ContentIdDTO } from '../../content/content.dto';

export class UpdateSeriesContentDto extends PartialType(
  CreateSeriesContentDto,
) {
  @ValidateNested()
  @IsOptional()
  @IsArray()
  @Type(() => ContentIdDTO) // Specify the nested DTO type
  contents?: ContentIdDTO[];
}
