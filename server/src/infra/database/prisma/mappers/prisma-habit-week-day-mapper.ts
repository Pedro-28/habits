import { HabitWeekDay } from '../../../../application/entities/habit-week-day';

export class PrismaHabitWeekDayMapper {
  static toPrisma(habitWeekDay: HabitWeekDay) {
    return {
      id: habitWeekDay.id,
      week_day: habitWeekDay.weekDay,
    };
  }
}
