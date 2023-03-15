import { Habit } from "../entities/habit";
import { HabitWeekDay } from "../entities/habit-week-day";
import { DateHelperRepository } from "../repositories/date-helper-repository";
import { HabitRepository } from "../repositories/habit-repository";
import { RequestDataValidatorRepository } from "../repositories/request-data-validator-repository";

export interface CreateHabitRequest {
  title: string;
  weekDays: number[];
}

type CreateHabitResponse = void;

export class CreateHabit {
  constructor(
    private habitRepository: HabitRepository,
    private dateHelperRepository: DateHelperRepository,
    private requestDataValidatorRepository: RequestDataValidatorRepository,
  ) { }

  public async execute(data: CreateHabitRequest): Promise<CreateHabitResponse> {
    const { title, weekDays } = this.requestDataValidatorRepository
      .validateCreateHabitData(data);

    const today = this.dateHelperRepository.getStartOfDay();

    const habit = new Habit({ title, createdAt: today });
    const habitWeekDay = weekDays.map((day) => new HabitWeekDay({ habit: habit, weekDay: day }));

    await this.habitRepository.create(habit, habitWeekDay);
  }
}
