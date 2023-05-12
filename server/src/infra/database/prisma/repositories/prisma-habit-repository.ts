import { PrismaClient } from "@prisma/client";
import { Habit } from "../../../../application/entities/habit";
import { HabitWeekDay } from "../../../../application/entities/habit-week-day";
import { HabitRepository } from "../../../../application/repositories/habit-repository";
import { PrismaHabitMapper } from "../mappers/prisma-habit-mapper";
import { PrismaHabitWeekDayMapper } from "../mappers/prisma-habit-week-day-mapper";

export class PrismaHabitRepository implements HabitRepository {
  constructor(private prisma: PrismaClient) { }

  async create(habit: Habit, weekDays: HabitWeekDay[]): Promise<void> {
    await this.prisma.habit.create({
      data: {
        ...PrismaHabitMapper.toPrisma(habit),
        weekDays: {
          create: weekDays.map(PrismaHabitWeekDayMapper.toPrisma),
        },
      }
    });
  }

  async findMany(createdAt: Date, weekday: number): Promise<Habit[]> {
    const habits = await this.prisma.habit.findMany({
      where: {
        created_at: { lte: createdAt },
        weekDays: { some: { week_day: weekday } },
      },
    });

    return habits.map(PrismaHabitMapper.toDomain);
  }
}
