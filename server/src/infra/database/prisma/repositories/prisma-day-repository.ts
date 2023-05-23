import { PrismaClient } from "@prisma/client";
import { Day } from "../../../../application/entities/day";
import { DayRepository } from "../../../../application/repositories/day-repository";
import { PrismaDayHabitMapper } from "../mappers/prisma-day-habit-mapper";
import { PrismaDayMapper } from "../mappers/prisma-day-mapper";


export class PrismaDayRepository implements DayRepository {
  constructor(private prisma: PrismaClient) { }

  async create(day: Day): Promise<void> {
    await this.prisma.day.create({
      data: {
        ...PrismaDayMapper.toPrisma(day),
      }
    });
  }

  async findUnique(date: Date, isDayHabitsIncluded: boolean): Promise<Day | null> {
    const rawDay = await this.prisma.day.findUnique({
      where: { date },
      include: { dayHabits: isDayHabitsIncluded },
    });

    if (!rawDay) return null;

    const day = PrismaDayMapper.toDomain(rawDay);

    if (isDayHabitsIncluded) {
      day.dayHabits = rawDay.dayHabits.map(PrismaDayHabitMapper.toDomain);
    }

    return day;
  }
}
