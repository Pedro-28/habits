import { Day } from "../entities/day";
import { DayHabit } from "../entities/day-habit";

export abstract class DayRepository {
  abstract create(day: Day): Promise<Day>;
  abstract findUnique(date: Date): Promise<(Day & { dayHabits?: DayHabit[] }) | null>;
}
