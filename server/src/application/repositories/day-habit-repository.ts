import { Day } from "../entities/day";
import { DayHabit } from "../entities/day-habit";

export abstract class DayHabitRepository {
  abstract findUnique(dayId: string, habitId: string): Promise<DayHabit | null>;
  abstract create(dayHabit: DayHabit): Promise<void>;
  abstract delete(dayHabit: DayHabit): Promise<void>;
}
