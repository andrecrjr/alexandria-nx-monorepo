import { ApiProperty, PartialType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsOptional, IsString, IsNotEmpty, isString, isNotEmpty } from 'class-validator';
import { ContentDTO } from '../content/content.dto';

export class CollectionDto {
  @IsString()
  @IsNotEmpty()
  currentStatusTrack: string;

  @IsInt()
  @IsOptional()
  page: number;

  @IsInt()
  @IsNotEmpty()
  contentId: number;

  @IsInt()
  profileId?: number;

  @Type(() => ContentDTO)
  content: ContentDTO;
}
export class CreateCollectionDto {
  @ApiProperty()
  currentStatusTrack: string;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  page: number;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  contentId: number;
}

export class UpdateCollectionDto extends PartialType(CreateCollectionDto) {}
