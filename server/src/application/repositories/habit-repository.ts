import { Habit } from "../entities/habit";
import { HabitWeekDay } from "../entities/habit-week-day";

export abstract class HabitRepository {
  abstract create(habit: Habit, weekDays: HabitWeekDay[]): Promise<void>;
  abstract findMany(createdAt: Date, weekday: number): Promise<Habit[]>;
}
