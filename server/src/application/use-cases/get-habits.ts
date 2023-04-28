import { Habit } from "../entities/habit";
import { DateHelperRepository } from "../repositories/date-helper-repository";
import { DayRepository } from "../repositories/day-repository";
import { HabitRepository } from "../repositories/habit-repository";
import { RequestDataValidatorRepository } from "../repositories/request-data-validator-repository";

export interface GetHabitsRequest {
  date: string;
}

export interface GetHabitsResponse {
  possibleHabits: Habit[];
  completedHabits: string[];
}

export class GetHabits {
  constructor(
    private habitRepository: HabitRepository,
    private dayRepository: DayRepository,
    private dateHelperRepository: DateHelperRepository,
    private requestDataValidatorRepository: RequestDataValidatorRepository,
  ) { }

  public async execute(data: GetHabitsRequest): Promise<GetHabitsResponse> {
    const { date } = this.requestDataValidatorRepository.validateGetHabitsData(data);

    const parsedDate = this.dateHelperRepository.getStartOfDay(date);
    const weekday = this.dateHelperRepository.getWeekday(parsedDate);

    const possibleHabits = await this.habitRepository.findMany(date, weekday);

    const day = await this.dayRepository.findUnique(parsedDate, true);

    const completedHabits = day?.dayHabits.map((dayHabit) => dayHabit.habitId) ?? [];

    return {
      possibleHabits,
      completedHabits,
    };
  }
}
