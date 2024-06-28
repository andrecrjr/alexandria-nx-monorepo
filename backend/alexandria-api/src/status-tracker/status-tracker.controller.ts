import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { StatusTrackerService } from './status-tracker.service';
import { CreateStatusTrackDto } from './dto/create-status-tracker.dto';
import { UpdateStatusTrackDto } from './dto/update-status-tracker.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '../auth/auth.guard';

@Controller('status-tracker')
@ApiTags('Status for Content Types')
export class StatusContentypeController {
  constructor(private readonly statusTrackerService: StatusTrackerService) {}

  @Post()
  @UseGuards(AuthGuard)
  @ApiBearerAuth('defaultBearerAuth')
  create(@Body() createStatusContentypeDto: CreateStatusTrackDto) {
    return this.statusTrackerService.create(createStatusContentypeDto);
  }

  @Get('/all')
  findAll() {
    return this.statusTrackerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.statusTrackerService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateStatusContentypeDto: UpdateStatusTrackDto,
  ) {
    return this.statusTrackerService.update(+id, updateStatusContentypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.statusTrackerService.remove(+id);
  }
}
