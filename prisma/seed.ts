
import {createEvents} from '../src/db/createEvent';
import {prisma} from '../src/prisma'

const seedData = async () => {
  await prisma.event.deleteMany();
  await prisma.organizer.deleteMany();
  await createEvents();
};

await seedData()




// createEvents()
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
