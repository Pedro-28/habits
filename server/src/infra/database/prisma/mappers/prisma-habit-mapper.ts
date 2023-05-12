import { Habit as RawHabit } from '@prisma/client';
import { Habit } from "../../../../application/entities/habit";

export class PrismaHabitMapper {
  static toPrisma(habit: Habit) {
    return {
      id: habit.id,
      title: habit.title,
      created_at: habit.createdAt,
    };
  }

  static toDomain(raw: RawHabit): Habit {
    return new Habit({
      id: raw.id,
      title: raw.title,
      createdAt: raw.created_at,
    });
  }
}
