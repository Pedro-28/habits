import { PrismaClient } from "@prisma/client";
import { DayHabit } from "../../../../application/entities/day-habit";
import { DayHabitRepository } from "../../../../application/repositories/day-habit-repository";
import { PrismaDayHabitMapper } from "../mappers/prisma-day-habit-mapper";

export class PrismaDayHabitRepository implements DayHabitRepository {
  constructor(private prisma: PrismaClient) { }

  async findUnique(dayId: string, habitId: string): Promise<DayHabit | null> {
    const prismaDayHabit = await this.prisma.dayHabit.findUnique({
      where: {
        day_id_habit_id: {
          day_id: dayId,
          habit_id: habitId,
        }
      },
    });

    if (!prismaDayHabit) return null;

    return PrismaDayHabitMapper.toDomain(prismaDayHabit);
  }

  async create(dayHabit: DayHabit): Promise<void> {
    await this.prisma.dayHabit.create({
      data: PrismaDayHabitMapper.toPrisma(dayHabit),
    });
  }

  async delete(dayHabit: DayHabit): Promise<void> {
    await this.prisma.dayHabit.delete({
      where: {
        id: dayHabit.id,
      },
    });
  }
}
