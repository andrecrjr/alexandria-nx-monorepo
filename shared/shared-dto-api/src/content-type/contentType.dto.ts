import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CreateContentTypeSchemaDTO } from "./formSchema";
import { ContentIdDTO } from "../content/content.dto";
import { Type } from "class-transformer";
import { ValidateNested } from "class-validator";
import { StatusTrackIdDTO } from "../status-tracker/statusTracker.dto";

export class CreateContentTypeDTO extends CreateContentTypeSchemaDTO {

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty({ required: false })
  @ValidateNested({ each: true })
  @Type(() => ContentIdDTO)
  contents: ContentIdDTO[];

  @ApiProperty({ required: true })
  @Type(() => StatusTrackIdDTO)
  statusTracker: StatusTrackIdDTO;

  statusTrackerId: number;
}

export class UpdateContentTypeDTO extends PartialType(CreateContentTypeDTO){}
