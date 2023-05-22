import { FastifyReply, FastifyRequest } from "fastify";
import { SummaryRepository } from "../../repositories/summary-repository";

export class GetSummaryController {
  constructor(
    private getSummary: SummaryRepository,
  ) { }

  execute = async (_request: FastifyRequest, reply: FastifyReply) => {
    try {
      return this.getSummary.query();
    } catch (error) {
      console.log(error);
      reply.code(500).send("Internal error");
    }
  }
}
