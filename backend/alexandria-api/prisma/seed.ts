import { PrismaClient } from '@prisma/client';
import { contentWithSynonyms } from './contentDump';

const prisma = new PrismaClient();

const createContent = async () => {
  for (const item of contentWithSynonyms) {
    const items = {
      ...item,
      synonyms: item.synonyms.map((item) => item.toLowerCase()),
    };
    await prisma.content.create({
      data: items,
    });
  }
  return true;
};

async function main() {
  const statusHistory = await prisma.statusTrackUser.create({
    data: {
      statusHistory: ['Reading', 'Completed', 'Paused', 'Abandoned'],
    },
  });

  await prisma.contentType.createMany({
    data: [
      {
        title: 'Manga',
        description: 'Type of content for books',
        statusTrackerId: statusHistory.id,
      },
      {
        title: 'Book',
        description: 'Type of content for manga',
        statusTrackerId: statusHistory.id,
      },
      {
        title: 'Anime',
        description: 'Type of content for anime',
        statusTrackerId: statusHistory.id,
      },
      // Add more content types as needed
    ],
  });

  // Seed data for User

  await prisma.user.create({
    data: {
      username: 'exampleUser',
      email: 'andre-carlos@Live.com',
      password: '123456',
      userActive: true,
      profile: {
        create: {
          bio: 'This is an example bio.',
          location: 'Example City',
          age: 30,
          gender: 'Male',
          interests: ['Coding', 'Running', 'Music'],
        },
      },
    },
    include: { profile: true },
  });
  console.log('User created');
  // Seed data for Genre
  await prisma.genre.createMany({
    data: [
      { name: 'Fantasy' },
      { name: 'Adventure' },
      { name: 'Romance' },
      // Add more genres as needed
    ],
  });
  console.log('genre created');

  await createContent();
  console.log('Contents created');

  console.log('Seed executed successfully.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
