import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ProfileService } from './profile.service';
import { AuthGuard } from '../../auth/auth.guard';
import { UpdateUserProfileDTO } from '@alexandria/shared-dto-api/user/users.dto';

@Controller('users/profile')
@ApiTags('User Profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}
  @UseGuards(AuthGuard)
  @ApiBearerAuth('defaultBearerAuth')
  @Get()
  getProfile(@Request() req) {
    return this.profileService.getUserAndProfile(req.user);
  }

  @Get(':id')
  getPublicProfile(@Param() id) {
    return this.profileService.getPublicUser(parseInt(id));
  }

  @UseGuards(AuthGuard)
  @Patch()
  editProfile(@Request() req, @Body() data: UpdateUserProfileDTO) {
    return this.profileService.updateProfile(data, req.user);
  }

  @Get('all')
  getAll() {
    return this.profileService.getAllProfiles();
  }

  @UseGuards(AuthGuard)
  @Delete()
  deleteProfile(@Request() req) {
    return this.profileService.deleteProfile(req.user);
  }
}
