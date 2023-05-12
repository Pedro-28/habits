import { FastifyReply, FastifyRequest } from "fastify";

export class GetSummaryController {
  constructor(
    private getHabits: undefined,
  ) { }

  execute = async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      
    } catch (error) {
      console.log(error);
      reply.code(500).send("Internal error");
    }
  }
}
