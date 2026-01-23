
import {createEvents} from '../src/db/createEvent';
import {createParticipants} from '../src/db/createParticipants';
import {prisma} from '../src/prisma'

const seedData = async () => {
  await prisma.participant.deleteMany();
  await prisma.event.deleteMany();
  await prisma.organizer.deleteMany();
  await createEvents();
  await createParticipants();
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
