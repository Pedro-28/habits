import { FastifyReply, FastifyRequest } from "fastify";
import { ToggleHabit, ToggleHabitRequest } from "../../../application/use-cases/toggle-habit";

export class ToggleHabitController {
  constructor(
    private toggleHabit: ToggleHabit,
  ) { }

  execute = async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      return this.toggleHabit.execute(request.params as ToggleHabitRequest);

    } catch (error) {
      console.log(error);
      reply.code(500).send("Internal error");
    }
  }
}
