import { IsInt, IsNotEmpty, IsString } from "class-validator";
import { ContentDTO } from "../content/formSchema";
import { PartialType } from "@nestjs/swagger";

export class CollectionDto {
  id?: number;
  currentStatusTrack: string;

  page: number;

  contentId: number;

  profileId?: number;

  content: ContentDTO;
}

export class CreateCollectionSchemaDTO {
  @IsString()
  currentStatusTrack: string;

  @IsInt()
  @IsNotEmpty()
  page: number;

  @IsInt()
  @IsNotEmpty()
  contentId: number;
}

export class UpdateCollectionDto extends PartialType(CreateCollectionSchemaDTO) {}