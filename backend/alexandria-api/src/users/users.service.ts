import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { CreateUserDTO, UserDTO } from './User.dto';

@Injectable()
export class UsersService {
  private prisma = new PrismaClient();
  private convertToPrisma(data: CreateUserDTO): Prisma.UserCreateInput {
    const { profile, ...rest } = data;

    return {
      ...rest,
      profile: {
        create: profile || {},
      },
    };
  }
  async create({ password, ...data }: CreateUserDTO): Promise<UserDTO | null> {
    const prismaData = this.convertToPrisma({ ...data, password });
    const hashedPassword = await bcrypt.hash(password, 10);

    return this.prisma.user.create({
      data: {
        ...prismaData,
        password: hashedPassword,
      },
      select: {
        email: true,
        password: false,
        username: true,
        createdAt: true,
        profile: true,
      },
    });
  }

  async findOne(email: string): Promise<UserDTO | null> {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }
}
