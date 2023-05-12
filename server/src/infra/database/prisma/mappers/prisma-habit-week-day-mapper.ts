import { HabitWeekDays as RawHabitWeekDays } from '@prisma/client';
import { HabitWeekDay } from '../../../../application/entities/habit-week-day';

export class PrismaHabitWeekDayMapper {
  static toPrisma(habitWeekDay: HabitWeekDay) {
    return {
      id: habitWeekDay.id,
      habit_id: habitWeekDay.habitId,
      week_day: habitWeekDay.weekDay,
    };
  }

  // static toDomain(raw: RawHabitWeekDays): HabitWeekDay {
  //   return new HabitWeekDay({
  //     id: raw.id,
  //     habit: raw.habit_id,
  //     weekDay: raw.week_day,
  //   });
  // }
}
