import { PrismaClient } from "@prisma/client";
import { SummaryRepository } from "../../../repositories/summary-repository";

export class PrismaSummaryRepository implements SummaryRepository {
  constructor(private prisma: PrismaClient) { }

  async query(): Promise<any> {
    const summary = await this.prisma.$queryRaw`
      SELECT
        D.id,
        D.date,
        (
          SELECT
            cast(count(*) as float)
          FROM day_habits DH
          WHERE DH.day_id == D.id
        ) as completed,
        (
          SELECT
            cast(count(*) as float)
          FROM habit_week_days HWD
          JOIN habits H
            ON H.id == HWD.habit_id
            AND H.created_at <= D.date
          WHERE
            HWD.week_day == cast(strftime('%w', D.date/1000.0, 'unixepoch') as int)
        ) as amount
      FROM days D
    `;

    return summary;
  }
}
