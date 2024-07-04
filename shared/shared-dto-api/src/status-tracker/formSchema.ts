import { PickType } from '@nestjs/mapped-types';
import { IsArray, IsInt, IsOptional } from 'class-validator';

export class StatusTrackDto {
  id: number;
  statusHistory: string[];
}

export class CreateStatusTrackSchemaDTO extends StatusTrackDto {
  @IsInt()
  @IsOptional()
  id: number;

  @IsArray()
  statusHistory: string[];
}

export class StatusTrackIdDTO extends PickType(CreateStatusTrackSchemaDTO, [
  'id',
] as const) {

  @IsInt()
  id: number;
  
}
