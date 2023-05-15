import { FastifyReply, FastifyRequest } from "fastify";

export class GetSummaryController {
  constructor(
    private getHabits: undefined,
  ) { }

  execute = async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      // Falta chamar o repositorio do sumario aqui
    } catch (error) {
      console.log(error);
      reply.code(500).send("Internal error");
    }
  }
}
