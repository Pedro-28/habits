import { FastifyReply, FastifyRequest } from "fastify";

import { CreateHabit, CreateHabitRequest } from "../../../application/use-cases/create-habit";

export class CreateHabitController {
  constructor(
    private createHabit: CreateHabit,
  ) { }

  execute = async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      return this.createHabit.execute(request.body as CreateHabitRequest);

    } catch (error) {
      console.log(error);
      reply.code(500).send("Internal error");
    }
  }
}
