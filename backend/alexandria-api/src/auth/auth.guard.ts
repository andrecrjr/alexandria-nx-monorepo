import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AmazonService } from './amazon-service/amazon-service.service';
import { jwtConstants } from '../constants';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    @Inject(AmazonService) private amazonService: AmazonService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    let payload;
    if (!token) {
      throw new UnauthorizedException();
    }

    try {
      if (token.includes('Atza|')) {
        const payload = await this.amazonService.validateUserProfile(token);
        request['user'] = payload;
        return true;
      }
      payload = await this.jwtService.verifyAsync(token, {
        secret: jwtConstants.secret,
      });
      // 💡 We're assigning the payload to the request object here
      // so that we can access it in our route handlers
      request['user'] = payload;
    } catch (err) {
      throw new UnauthorizedException();
    }
    return true;
  }

  private extractTokenFromHeader(request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    const secureToken = token ?? request.cookies['accessToken'];
    return type === 'Bearer' || secureToken ? token || secureToken : undefined;
  }
}
