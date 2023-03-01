import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const firstHabitId = 'd1523daf-dea5-4094-a75d-d648090daf2d';
const firstHabitCreationDate = new Date('2022-12-31T03:00:00.000');

const secondHabitId = '8cf83c89-f850-499e-a7bd-610bc75af69e';
const secondHabitCreationDate = new Date('2023-01-03T03:00:00.000');

const thirdHabitId = '2efd54fe-ccb7-45ae-b7dc-496bd8ec16f8';
const thirdHabitCreationDate = new Date('2023-01-08T03:00:00.000');

async function main() {

}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
