import { FastifyInstance } from "fastify";
import { CreateHabitController } from "../controllers/create-habit-controller";
import { CreateHabit } from "../../../application/use-cases/create-habit";
import { PrismaHabitRepository } from "../../database/prisma/repositories/prisma-habit-repository";
import { prisma } from "../../lib/prisma";
import { DayjsDateHelperRepository } from "../../lib/dayjs/dayjs-date-helper-repository";
import { ZodRequestDataValidatorRepository } from "../../lib/zod/zod-request-data-validator-repository";

export class CreateHabitRoute {
  constructor(private app: FastifyInstance) { }

  route() {
    const habitRepository = new PrismaHabitRepository(prisma);
    const dayjsDateHelperRepository = new DayjsDateHelperRepository();
    const zodRequestDataValidatorRepository = new ZodRequestDataValidatorRepository();

    const createHabit = new CreateHabit(
      habitRepository,
      dayjsDateHelperRepository,
      zodRequestDataValidatorRepository
    );

    const createHabitController = new CreateHabitController(createHabit);

    this.app.post("/habits", createHabitController.execute);
  }
}
