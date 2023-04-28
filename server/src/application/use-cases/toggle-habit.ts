import { Day } from "../entities/day";
import { DayHabit } from "../entities/day-habit";
import { DateHelperRepository } from "../repositories/date-helper-repository";
import { DayHabitRepository } from "../repositories/day-habit-repository";
import { DayRepository } from "../repositories/day-repository";
import { RequestDataValidatorRepository } from "../repositories/request-data-validator-repository";

export interface ToggleHabitRequest {
  id: string;
}

type ToggleHabitResponse = void;


export class ToggleHabit {
  constructor(
    private dayHabitRepository: DayHabitRepository,
    private dayRepository: DayRepository,
    private dateHelperRepository: DateHelperRepository,
    private requestDataValidatorRepository: RequestDataValidatorRepository,
  ) { }

  public async execute(data: ToggleHabitRequest): Promise<ToggleHabitResponse> {
    const { id } = this.requestDataValidatorRepository.validateToggleHabitData(data);

    const today = this.dateHelperRepository.getStartOfDay();

    let day = await this.dayRepository.findUnique(today, false);

    if (!day) {
      day = new Day({ date: today });
      await this.dayRepository.create(day);
    }

    const dayHabit = await this.dayHabitRepository.findUnique(day.id, id);

    if (dayHabit) {
      await this.dayHabitRepository.delete(dayHabit);
    } else {
      await this.dayHabitRepository.create(new DayHabit({ dayId: day.id, habitId: id }));
    }
  }
}
