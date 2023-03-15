export abstract class DateHelperRepository {
  abstract getStartOfDay(date?: string | Date): Date;
  abstract getWeekday(date: string | Date): number;
}
