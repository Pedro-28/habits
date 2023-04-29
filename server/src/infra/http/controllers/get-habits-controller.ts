import { FastifyReply, FastifyRequest } from "fastify";

import { GetHabits, GetHabitsRequest } from "../../../application/use-cases/get-habits";
import { GetHabitsViewModel } from "../view-models/get-habits-view-model";

export class GetHabitsController {
  constructor(
    private getHabits: GetHabits,
  ) { }

  execute = async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const habits = await this.getHabits.execute(request.query as GetHabitsRequest);

      const possibleHabits = habits.possibleHabits.map(GetHabitsViewModel.toHTTP);

      return {
        possibleHabits,
        completedHabits: habits.completedHabits,
      };
    } catch (error) {
      console.log(error);
      reply.code(500).send("Internal error");
    }
  }
}
