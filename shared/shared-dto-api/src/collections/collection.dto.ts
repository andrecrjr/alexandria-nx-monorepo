import { ApiProperty } from "@nestjs/swagger";
import { CreateCollectionSchemaDTO } from "./formSchema";
import { PartialType } from "@nestjs/mapped-types";

export class CreateCollectionDto extends CreateCollectionSchemaDTO {
  @ApiProperty()
  currentStatusTrack: string;

  @ApiProperty()
  page: number;

  @ApiProperty()
  contentId: number;
}

export class UpdateCollectionDto extends PartialType(CreateCollectionDto) {}