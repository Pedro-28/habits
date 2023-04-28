import { Day } from "../entities/day";
import { DayHabit } from "../entities/day-habit";

export abstract class DayRepository {
  abstract create(day: Day): Promise<void>;
  abstract findUnique(date: Date, isDayHabitsIncluded: boolean): Promise<Day | null>;
}
