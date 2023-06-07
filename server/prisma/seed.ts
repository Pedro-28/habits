import { randomUUID } from 'crypto';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const firstHabitId = 'd1523daf-dea5-4094-a75d-d648090daf2d';
const firstHabitCreationDate = new Date('2022-12-31T03:00:00.000');

const secondHabitId = '8cf83c89-f850-499e-a7bd-610bc75af69e';
const secondHabitCreationDate = new Date('2023-01-03T03:00:00.000');

const thirdHabitId = '2efd54fe-ccb7-45ae-b7dc-496bd8ec16f8';
const thirdHabitCreationDate = new Date('2023-01-08T03:00:00.000');

async function run() {
  await prisma.habit.deleteMany();
  await prisma.day.deleteMany();

  await Promise.all([
    prisma.habit.create({
      data: {
        id: firstHabitId,
        title: 'Beber 3L água',
        created_at: firstHabitCreationDate,
        weekDays: {
          create: [
            { id: randomUUID(), week_day: 1 },
            { id: randomUUID(), week_day: 2 },
            { id: randomUUID(), week_day: 3 },
          ],
        }
      },
    }),

    prisma.habit.create({
      data: {
        id: secondHabitId,
        title: 'Exercitar',
        created_at: secondHabitCreationDate,
        weekDays: {
          create: [
            { id: randomUUID(), week_day: 3 },
            { id: randomUUID(), week_day: 4 },
            { id: randomUUID(), week_day: 5 },
          ],
        }
      },
    }),

    prisma.habit.create({
      data: {
        id: thirdHabitId,
        title: 'Dormir 8h',
        created_at: thirdHabitCreationDate,
        weekDays: {
          create: [
            { id: randomUUID(), week_day: 1 },
            { id: randomUUID(), week_day: 2 },
            { id: randomUUID(), week_day: 3 },
            { id: randomUUID(), week_day: 4 },
            { id: randomUUID(), week_day: 5 },
          ],
        }
      },
    }),
  ]);

  await Promise.all([
    prisma.day.create({
      data: {
        id: randomUUID(),
        date: new Date('2023-01-02T03:00:00.000z'),
        dayHabits: {
          create: {
            id: randomUUID(),
            habit_id: firstHabitId,
          },
        },
      },
    }),

    prisma.day.create({
      data: {
        id: randomUUID(),
        date: new Date('2023-01-06T03:00:00.000z'),
        dayHabits: {
          create: {
            id: randomUUID(),
            habit_id: firstHabitId,
          },
        },
      },
    }),

    prisma.day.create({
      data: {
        id: randomUUID(),
        date: new Date('2023-01-04T03:00:00.000z'),
        dayHabits: {
          create: [
            { id: randomUUID(), habit_id: firstHabitId },
            { id: randomUUID(), habit_id: secondHabitId },
          ],
        },
      },
    }),
  ]);
}

run()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
