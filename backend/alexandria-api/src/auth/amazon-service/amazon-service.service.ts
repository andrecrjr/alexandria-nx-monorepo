import { Injectable } from '@nestjs/common';
import { PrismaService } from 'backend/alexandria-api/prisma/prisma.service';

@Injectable()
export class AmazonService {
  constructor(private prismaService: PrismaService) {}
  async validateUserProfile(token: string) {
    const data = await fetch('https://api.amazon.com/user/profile', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const { email } = await data.json();
    const user = await this.prismaService.user.findFirst({ where: { email } });
    return { sub: user.id, email: email };
  }
}
