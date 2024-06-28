import { Body, Controller, Post, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';

import AuthCredentials from "@alexandria/shared-dto-api/authentication"
@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() body: AuthCredentials, @Res({ passthrough: true }) res) {
    const tokens = await this.authService.login(body);
    res.setCookie('refreshToken', tokens.refresh_token, {
      httpOnly: true,
      path: '/',
      maxAge: 24 * 60 * 60 * 1000, // 1 dia
      secure: process.env.NODE_ENV === 'prod',
    });
    return { message: 'account logged', accessToken: tokens.access_token };
  }

  @Post('refresh')
  async refresh(@Req() req, @Res({ passthrough: true }) res) {
    const refreshToken = req.cookies['refreshToken'];
    const tokens = await this.authService.refreshToken(refreshToken);
    res.setCookie('refreshToken', tokens.refresh_token, {
      httpOnly: true,
      path: '/',
      maxAge: 24 * 60 * 60 * 1000, // 1 dia
      secure: process.env.NODE_ENV === 'prod',
    });

    return { message: 'token refreshed', accessToken: tokens.access_token };
  }
}
