
import {createEvents} from '../src/db/createEvent';
import {prisma} from '../src/prisma'
createEvents()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
