import { CreateHabitRequest } from "../use-cases/create-habit";
import { GetHabitsRequest } from "../use-cases/get-habits";
import { ToggleHabitRequest } from "../use-cases/toggle-habit";

export abstract class RequestDataValidatorRepository {
  abstract validateCreateHabitData(data: CreateHabitRequest): CreateHabitRequest;
  abstract validateGetHabitsData(data: GetHabitsRequest): { date: Date };
  abstract validateToggleHabitData(data: ToggleHabitRequest): ToggleHabitRequest;
}
