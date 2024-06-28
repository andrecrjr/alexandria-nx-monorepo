import { PartialType } from '@nestjs/mapped-types';
import { CreateStatusTrackDto } from './create-status-tracker.dto';

export class UpdateStatusTrackDto extends PartialType(CreateStatusTrackDto) {}
