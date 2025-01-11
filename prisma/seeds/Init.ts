import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      { name: 'Will Smith' },
      { name: 'Tom Cruise' },
      { name: 'Angelina Jolie' },
      { name: 'Scarlett Johansson' },
      { name: 'Jennifer Anniston' },
    ],
  });

  await prisma.task.createMany({
    data: [
      { content: 'Setup development environment', completed: true },
      { content: 'Create a new project' },
      { content: 'Deploy to live server' },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);

    await prisma.$disconnect();
    process.exit(1);
  });
