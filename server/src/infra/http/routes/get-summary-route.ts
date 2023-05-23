import { FastifyInstance } from "fastify";

import { prisma } from "../../lib/prisma";
import { GetSummaryController } from "../controllers/get-summary-controller";
import { PrismaSummaryRepository } from "../../database/prisma/repositories/prisma-summary-repository";


export class GetSummaryRoute {
  constructor(private app: FastifyInstance) { }

  route() {
    const prismaSummaryRepository = new PrismaSummaryRepository(prisma);

    const getSummaryController = new GetSummaryController(prismaSummaryRepository);

    this.app.get("/summary", getSummaryController.execute);
  }
}
