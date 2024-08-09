import { PrismaClient } from '@prisma/client';
import { contentWithSynonyms } from './contentDump';

const prisma = new PrismaClient();

const createContent = async () => {
  for (const item of contentWithSynonyms) {
    const items = {
      ...item,
      synonyms: item.synonyms.map((item) => item.toLowerCase())
    };
    await prisma.content.create({
      data: items
    });
  }
  return true;
};

async function main() {
  const statusHistory = await prisma.statusTrackUser.create({
    data: {
      statusHistory: ['Reading', 'Completed', 'Paused', 'Abandoned']
    }
  });

  await prisma.contentType.createMany({
    data: [
      {
        title: 'Manga',
        description: 'Type of content for books',
        statusTrackerId: statusHistory.id
      },
      {
        title: 'Book',
        description: 'Type of content for manga',
        statusTrackerId: statusHistory.id
      },
      {
        title: 'Anime',
        description: 'Type of content for anime',
        statusTrackerId: statusHistory.id
      }
      // Add more content types as needed
    ]
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
          interests: ['Coding', 'Running', 'Music']
        }
      }
    },
    include: { profile: true }
  });
  console.log('User created');
  // Seed data for Genre
  await prisma.genre.createMany({
    data: [
      { name: 'Fantasy' },
      { name: 'Adventure' },
      { name: 'Romance' }
      // Add more genres as needed
    ]
  });
  console.log('genre created');

  await createContent();
  console.log('Contents created');

  await prisma.authorContent.createMany({
    data: [
      {
        name: 'Gabriel Garcia Marquez',
        bio: 'Colombian novelist, short-story writer, screenwriter, and journalist.',
        born: new Date('1927-03-06'),
        died: new Date('2014-04-17'),
        nationality: 'Colombian',
        awards: ['Nobel Prize in Literature'],
        photoUrl: 'https://example.com/photos/gabriel.jpg',
        website: 'https://example.com/gabriel',
        genres: ['Magical Realism', 'Fiction'],
        socialMedia: JSON.stringify({
          twitter: '@gabriel',
          facebook: 'gabriel'
        }),
        bestSellers: [
          'One Hundred Years of Solitude',
          'Love in the Time of Cholera'
        ],
        influences: ['William Faulkner', 'Ernest Hemingway'],
        influenced: ['Isabel Allende', 'Salman Rushdie']
      },
      {
        name: 'Jane Austen',
        bio: 'English novelist known primarily for her six major novels.',
        born: new Date('1775-12-16'),
        died: new Date('1817-07-18'),
        nationality: 'British',
        awards: [],
        photoUrl: 'https://example.com/photos/jane.jpg',
        website: 'https://example.com/jane',
        genres: ['Romance', 'Fiction'],
        socialMedia: JSON.stringify({}),
        bestSellers: ['Pride and Prejudice', 'Sense and Sensibility'],
        influences: ['Samuel Richardson', 'Fanny Burney'],
        influenced: ['Virginia Woolf', 'E. M. Forster']
      },
      {
        name: 'Mark Twain',
        bio: 'American writer, humorist, entrepreneur, publisher, and lecturer.',
        born: new Date('1835-11-30'),
        died: new Date('1910-04-21'),
        nationality: 'American',
        awards: [],
        photoUrl: 'https://example.com/photos/mark.jpg',
        website: 'https://example.com/mark',
        genres: ['Fiction', 'Humor'],
        socialMedia: JSON.stringify({}),
        bestSellers: [
          'The Adventures of Tom Sawyer',
          'Adventures of Huckleberry Finn'
        ],
        influences: ['Charles Dickens', 'Edgar Allan Poe'],
        influenced: ['Ernest Hemingway', 'William Faulkner']
      },
      {
        name: 'J.K. Rowling',
        bio: 'British author, best known for the Harry Potter series.',
        born: new Date('1965-07-31'),
        died: null,
        nationality: 'British',
        awards: ['Hugo Award', 'Nebula Award'],
        photoUrl: 'https://example.com/photos/jk.jpg',
        website: 'https://example.com/jk',
        genres: ['Fantasy', 'Drama'],
        socialMedia: JSON.stringify({ twitter: '@jk_rowling' }),
        bestSellers: [
          "Harry Potter and the Philosopher's Stone",
          'Harry Potter and the Chamber of Secrets'
        ],
        influences: ['C.S. Lewis', 'J.R.R. Tolkien'],
        influenced: ['Suzanne Collins', 'Stephenie Meyer']
      },
      {
        name: 'George Orwell',
        bio: 'English novelist, essayist, journalist, and critic.',
        born: new Date('1903-06-25'),
        died: new Date('1950-01-21'),
        nationality: 'British',
        awards: [],
        photoUrl: 'https://example.com/photos/george.jpg',
        website: 'https://example.com/george',
        genres: ['Dystopian', 'Political Fiction'],
        socialMedia: JSON.stringify({}),
        bestSellers: ['1984', 'Animal Farm'],
        influences: ['H.G. Wells', 'Jack London'],
        influenced: ['Margaret Atwood', 'Ray Bradbury']
      },
      {
        name: 'Haruki Murakami',
        bio: 'Japanese writer known for his works of fiction and non-fiction.',
        born: new Date('1949-01-12'),
        died: null,
        nationality: 'Japanese',
        awards: ['Franz Kafka Prize', 'Jerusalem Prize'],
        photoUrl: 'https://example.com/photos/haruki.jpg',
        website: 'https://example.com/haruki',
        genres: ['Fiction', 'Surrealism'],
        socialMedia: JSON.stringify({}),
        bestSellers: ['Norwegian Wood', 'Kafka on the Shore'],
        influences: ['Raymond Carver', 'Kurt Vonnegut'],
        influenced: ['David Mitchell', 'Neil Gaiman']
      },
      {
        name: 'Toni Morrison',
        bio: 'American novelist, essayist, editor, and professor.',
        born: new Date('1931-02-18'),
        died: new Date('2019-08-05'),
        nationality: 'American',
        awards: ['Nobel Prize in Literature', 'Pulitzer Prize'],
        photoUrl: 'https://example.com/photos/toni.jpg',
        website: 'https://example.com/toni',
        genres: ['Fiction', 'African-American Literature'],
        socialMedia: JSON.stringify({}),
        bestSellers: ['Beloved', 'Song of Solomon'],
        influences: ['James Baldwin', 'Zora Neale Hurston'],
        influenced: ['Chimamanda Ngozi Adichie', 'Jesmyn Ward']
      },
      {
        name: 'Leo Tolstoy',
        bio: 'Russian writer who is regarded as one of the greatest authors of all time.',
        born: new Date('1828-09-09'),
        died: new Date('1910-11-20'),
        nationality: 'Russian',
        awards: [],
        photoUrl: 'https://example.com/photos/leo.jpg',
        website: 'https://example.com/leo',
        genres: ['Fiction', 'Historical Fiction'],
        socialMedia: JSON.stringify({}),
        bestSellers: ['War and Peace', 'Anna Karenina'],
        influences: ['Homer', 'William Shakespeare'],
        influenced: ['James Joyce', 'Marcel Proust']
      },
      {
        name: 'Virginia Woolf',
        bio: 'English writer, considered one of the most important modernist 20th-century authors.',
        born: new Date('1882-01-25'),
        died: new Date('1941-03-28'),
        nationality: 'British',
        awards: [],
        photoUrl: 'https://example.com/photos/virginia.jpg',
        website: 'https://example.com/virginia',
        genres: ['Modernism', 'Fiction'],
        socialMedia: JSON.stringify({}),
        bestSellers: ['Mrs Dalloway', 'To the Lighthouse'],
        influences: ['Marcel Proust', 'James Joyce'],
        influenced: ['Margaret Atwood', 'Michael Cunningham']
      },
      {
        name: 'Chinua Achebe',
        bio: 'Nigerian novelist, poet, professor, and critic.',
        born: new Date('1930-11-16'),
        died: new Date('2013-03-21'),
        nationality: 'Nigerian',
        awards: ['Man Booker International Prize'],
        photoUrl: 'https://example.com/photos/chinua.jpg',
        website: 'https://example.com/chinua',
        genres: ['Fiction', 'African Literature'],
        socialMedia: JSON.stringify({}),
        bestSellers: ['Things Fall Apart', 'No Longer at Ease'],
        influences: ['Joseph Conrad', 'Amos Tutuola'],
        influenced: ["Ngũgĩ wa Thiong'o", 'Chimamanda Ngozi Adichie']
      }
    ]
  });

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
