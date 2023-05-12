import { DayHabit as RawDayHabit } from '@prisma/client';
import { DayHabit } from '../../../../application/entities/day-habit';

export class PrismaDayHabitMapper {
  static toPrisma(dayHabit: DayHabit) {
    return {
      id: dayHabit.id,
      day_id: dayHabit.dayId,
      habit_id: dayHabit.habitId,
    };
  }

  static toDomain(raw: RawDayHabit): DayHabit {
    return new DayHabit({
      id: raw.id,
      dayId: raw.day_id,
      habitId: raw.habit_id,
    });
  }
}
