import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './local.strategy';
import { AmazonServiceModule } from './amazon-service/amazon-service.module';
import { UsersModule } from '../users/users.module';
import { jwtConstants } from '../constants';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    AmazonServiceModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: process.env.LOCAL_EXPIRE_ACCESS_TOKEN! },
    }),
  ],
  providers: [AuthService, LocalStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
