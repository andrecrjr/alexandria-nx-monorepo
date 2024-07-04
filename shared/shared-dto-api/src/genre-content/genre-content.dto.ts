import { IsInt, IsOptional } from "class-validator";
import { CreateGenreContentDtoSchema } from "./formSchema";
import { ApiProperty, PartialType, PickType } from "@nestjs/swagger";

export class CreateGenreContentDto extends CreateGenreContentDtoSchema {
  @ApiProperty()
  name: string;
}

export class GenreIdDTO extends PickType(CreateGenreContentDto, ['id']) {
  @IsInt()
  @IsOptional()
  id: number;
}

export class UpdateGenreContentDto extends PartialType(CreateGenreContentDto) {}
