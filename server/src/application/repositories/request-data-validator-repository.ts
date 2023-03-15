import { CreateHabitRequest } from "../use-cases/create-habit";
import { GetHabitsRequest } from "../use-cases/get-habits";

export abstract class RequestDataValidatorRepository {
  abstract validateCreateHabitData(data: CreateHabitRequest): CreateHabitRequest;
  abstract validateGetHabitsData(data: GetHabitsRequest): { date: Date };
}
