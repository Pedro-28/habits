import dayjs from "dayjs";

import { DateHelperRepository } from "../../../application/repositories/date-helper-repository";

export class DayjsDateHelperRepository implements DateHelperRepository {
  getStartOfDay(date?: string | Date | undefined): Date {
    return dayjs(date).startOf('day').toDate();
  }
  getWeekday(date: string | Date): number {
    return dayjs(date).startOf('day').get('day');
  }
}
