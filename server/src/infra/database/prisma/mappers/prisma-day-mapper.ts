import { Day as RawDay } from '@prisma/client';
import { Day } from '../../../../application/entities/day';

export class PrismaDayMapper {
  static toPrisma(day: Day) {
    return {
      id: day.id,
      date: day.date,
    };
  }

  static toDomain(raw: RawDay): Day {
    return new Day({
      id: raw.id,
      date: raw.date,
    });
  }
}
