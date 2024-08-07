import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { AuthCredentials } from '@alexandria/shared-dto-api/authentication/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string) {
    const user = await this.usersService.findOne(email);
    if (user && (await bcrypt.compare(pass, user.password))) {
      delete user['password'];
      return user;
    }
    return null;
  }

  async login(user: AuthCredentials) {
    try {
      const { email, id } = await this.usersService.findOne(user.email);
      const payload = { email: email, sub: id };
      return {
        access_token: await this.jwtService.signAsync(payload),
        refresh_token: await this.refreshTokenCreation(payload),
      };
    } catch (error) {
      throw new NotFoundException(`User Account not found`);
    }
  }

  async refreshTokenCreation(user: { email: string; sub: number }) {
    return await this.jwtService.signAsync(user, {
      expiresIn: process.env.LOCAL_EXPIRE_REFRESH_TOKEN,
    });
  }

  async refreshToken(refreshToken: string) {
    // Verificar se o refreshToken é válido
    const userData: { email: string; sub: number } =
      this.jwtService.verify(refreshToken);
    if (userData) {
      const userPayload = { email: userData.email, sub: userData.sub };
      const newRefreshToken = await this.refreshTokenCreation(userPayload);
      return {
        access_token: await this.jwtService.signAsync({ ...userPayload }),
        refresh_token: newRefreshToken,
      };
    } else {
      throw new Error('Invalid or expired refresh token');
    }
  }
}
