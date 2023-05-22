import { FastifyInstance } from "fastify";
import { CreateHabitController } from "../controllers/create-habit-controller";
import { CreateHabit } from "../../../application/use-cases/create-habit";
import { PrismaHabitRepository } from "../../database/prisma/repositories/prisma-habit-repository";

export class AppRoutes {
  constructor(private app: FastifyInstance) { }  

  routes() {

  }
}
