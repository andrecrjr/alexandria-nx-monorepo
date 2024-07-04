import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { ContentDTO } from "../content/formSchema";

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
  @IsOptional()
  currentStatusTrack?: string;

  @IsInt()
  @IsNotEmpty()
  page: number;

  @IsInt()
  @IsNotEmpty()
  contentId: number;
}
