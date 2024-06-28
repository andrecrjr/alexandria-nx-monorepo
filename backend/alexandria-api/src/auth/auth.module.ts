import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/constants';
import { LocalStrategy } from './local.strategy';
import { AmazonServiceModule } from './amazon-service/amazon-service.module';

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
