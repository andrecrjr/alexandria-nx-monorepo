import { PickType } from '@nestjs/mapped-types';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsArray, IsInt, IsOptional } from 'class-validator';
import { CreateStatusTrackSchemaDTO } from './formSchema';

export class CreateStatusTrackDto extends CreateStatusTrackSchemaDTO {
  @IsInt()
  @IsOptional()
  id: number;

  @IsArray()
  @ApiProperty({ required: true })
  statusHistory: string[];
}

export class UpdateStatusTrackDto extends PartialType(CreateStatusTrackDto){
  
}

export class StatusTrackIdDTO extends PickType(CreateStatusTrackDto, [
  'id',
] as const) {
  @ApiProperty({ required: false })
  @IsInt()
  id: number;
}
