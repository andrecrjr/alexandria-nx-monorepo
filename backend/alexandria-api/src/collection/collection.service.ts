import { Injectable } from '@nestjs/common';
import { JwtDTO } from '../auth/jwt.dto';
import { PrismaService } from 'backend/alexandria-api/prisma/prisma.service';
import { CollectionDto, CreateCollectionSchemaDTO, UpdateCollectionDto } from '@alexandria/shared-dto-api/collections/formSchema';

@Injectable()
export class CollectionService {
  constructor(private readonly prismaService: PrismaService) {}
  async createUserWithContent(user: JwtDTO, data: CreateCollectionSchemaDTO) {
    const collectionUserData = await this.prismaService.collection.create({
      data: {
        ...data,
        profileId: user.sub,
      },
    });
    return collectionUserData;
  }

  async getCollectionByUser(user: JwtDTO): Promise<CollectionDto[]> {
    const userCollection = await this.prismaService.collection.findMany({
      where: { profileId: user.sub },
      include: {
        content: {
          include: {
            contentType: true,
            createdBy: true,
          },
        },
      },
    });
    return userCollection;
  }

  async updateCollectionContentAndUser(
    user: JwtDTO,
    data: UpdateCollectionDto,
  ) {
    return await this.prismaService.collection.update({
      where: {
        contentId_profileId: {
          profileId: user.sub,
          contentId: data.contentId,
        },
      },
      data: {
        ...data,
      },
    });
  }

  async searchInsideCollectionByContentName(
    partialContent: string,
    user: JwtDTO,
  ): Promise<CollectionDto[]> {
    const data = await this.prismaService.collection.findMany({
      where: {
        profileId: user.sub,
        content: {
          title: {
            contains: partialContent,
            mode: 'insensitive',
          },
        },
      },
      include: {
        content: true,
      },
    });

    return data;
  }

  async searchInsideCollectionBySynonim(
    partialContent: string,
    contentType: string,
    user: JwtDTO,
  ): Promise<CollectionDto[]> {
    console.log(partialContent);
    const data = await this.prismaService.collection.findMany({
      where: {
        profileId: user.sub,
        content: {
          synonyms: {
            has: partialContent,
          },
          contentType: {
            title: {
              contains: contentType,
              mode: 'insensitive',
            },
          },
        },
      },
      include: {
        content: true,
      },
    });

    return data;
  }
}
