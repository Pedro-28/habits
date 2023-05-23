import { FastifyInstance } from "fastify";
import { GetHabits } from "../../../application/use-cases/get-habits";
import { GetHabitsController } from "../controllers/get-habits-controller";
import { prisma } from "../../lib/prisma";
import { PrismaHabitRepository } from "../../database/prisma/repositories/prisma-habit-repository";
import { PrismaDayRepository } from "../../database/prisma/repositories/prisma-day-repository";
import { DayjsDateHelperRepository } from "../../lib/dayjs/dayjs-date-helper-repository";
import { ZodRequestDataValidatorRepository } from "../../lib/zod/zod-request-data-validator-repository";

export class GetHabitsRoute {
  constructor(private app: FastifyInstance) { }

  route() {
    const prismaHabitRepository = new PrismaHabitRepository(prisma);
    const prismaDayRepository = new PrismaDayRepository(prisma);
    const dayjsDateHelperRepository = new DayjsDateHelperRepository();
    const zodRequestDataValidatorRepository = new ZodRequestDataValidatorRepository();

    const getHabits = new GetHabits(
      prismaHabitRepository,
      prismaDayRepository,
      dayjsDateHelperRepository,
      zodRequestDataValidatorRepository
    );
    const getHabitsController = new GetHabitsController(getHabits);

    this.app.get("/day", getHabitsController.execute);
  }
}
