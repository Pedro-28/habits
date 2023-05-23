import { FastifyInstance } from "fastify";

import { prisma } from "../../lib/prisma";
import { DayjsDateHelperRepository } from "../../lib/dayjs/dayjs-date-helper-repository";
import { ZodRequestDataValidatorRepository } from "../../lib/zod/zod-request-data-validator-repository";
import { PrismaDayHabitRepository } from "../../database/prisma/repositories/prisma-day-habit-repository";
import { PrismaDayRepository } from "../../database/prisma/repositories/prisma-day-repository";
import { ToggleHabit } from "../../../application/use-cases/toggle-habit";
import { ToggleHabitController } from "../controllers/toggle-habit-controller";

export class ToggleHabitRoute {
  constructor(private app: FastifyInstance) { }

  route() {
    const prismaDayHabitRepository = new PrismaDayHabitRepository(prisma);
    const prismaDayRepository = new PrismaDayRepository(prisma);
    const dayjsDateHelperRepository = new DayjsDateHelperRepository();
    const zodRequestDataValidatorRepository = new ZodRequestDataValidatorRepository();

    const toggleHabit = new ToggleHabit(
      prismaDayHabitRepository,
      prismaDayRepository,
      dayjsDateHelperRepository,
      zodRequestDataValidatorRepository
    );
    const toggleHabitController = new ToggleHabitController(toggleHabit);

    this.app.patch("/habits/:id/toggle", toggleHabitController.execute);
  }
}
