import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'prisma/prisma.service';

// Mock Prisma client
const prismaClient = new PrismaClient();

jest.mock('@prisma/client', () => ({
  PrismaClient: jest.fn().mockImplementation(() => prismaClient),
}));

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService, PrismaService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should create a new user', async () => {
    const createUserDto = {
      email: 'test@example.com',
      password: 'strongpassword',
      username: 'testuser',
      userActive: true,
      profile: {},
    };

    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const prismaData = {
      ...createUserDto,
      password: hashedPassword,
      profile: {
        create: createUserDto.profile || {},
      },
    };

    prismaClient.user.create = jest.fn().mockResolvedValue({
      email: createUserDto.email,
      username: createUserDto.username,
      createdAt: new Date(),
      profile: createUserDto.profile,
    });

    const result = await service.create(createUserDto);

    expect(prismaClient.user.create).toHaveBeenCalledWith({
      data: prismaData,
      select: {
        email: true,
        password: false,
        username: true,
        createdAt: true,
        profile: true,
      },
    });
    expect(result).toEqual({
      email: createUserDto.email,
      username: createUserDto.username,
      createdAt: expect.any(Date),
      profile: createUserDto.profile,
    });
  });
});
