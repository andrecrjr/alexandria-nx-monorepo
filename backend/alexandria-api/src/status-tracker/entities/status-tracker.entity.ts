import { ContentTypeDTO } from "../../contenttype/contenttype.dto";

export class StatusTrackerDTO {
  id: number;
  statusHistory: string[];
  contentType?: ContentTypeDTO;
}
