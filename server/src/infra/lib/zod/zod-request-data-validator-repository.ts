import { z } from "zod";

import { RequestDataValidatorRepository } from "../../../application/repositories/request-data-validator-repository";
import { CreateHabitRequest } from "../../../application/use-cases/create-habit";
import { GetHabitsRequest } from "../../../application/use-cases/get-habits";
import { ToggleHabitRequest } from "../../../application/use-cases/toggle-habit";

export class ZodRequestDataValidatorRepository implements RequestDataValidatorRepository {
  validateCreateHabitData(data: CreateHabitRequest): CreateHabitRequest {
    const createHabitBody = z.object({
      title: z.string(),
      weekDays: z.array(z.number()).min(0).max(6),
    });

    return createHabitBody.parse(data);
  }

  validateGetHabitsData(data: GetHabitsRequest): { date: Date; } {
    const getDayParams = z.object({
      date: z.coerce.date(),
    });

    return getDayParams.parse(data);
  }

  validateToggleHabitData(data: ToggleHabitRequest): ToggleHabitRequest {
    const toggleHabitParams = z.object({
      id: z.string().uuid(),
    });

    return toggleHabitParams.parse(data);
  }
}
