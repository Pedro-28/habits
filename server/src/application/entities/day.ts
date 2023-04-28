import { randomUUID } from 'crypto';
import { Replace } from '../../helpers/Replace';
import { DayHabit } from './day-habit';

export interface DayProps {
  id: string;
  date: Date;
  dayHabits: DayHabit[];
}

export class Day {
  private props: DayProps;

  constructor(props: Replace<DayProps, { id?: string, dayHabits?: DayHabit[] }>) {
    this.props = {
      ...props,
      id: props.id ?? randomUUID(),
      dayHabits: props.dayHabits ?? [],
    };
  }

  public get id(): string {
    return this.props.id;
  }

  public get date(): Date {
    return this.props.date;
  }

  public get dayHabits(): DayHabit[] {
    return this.props.dayHabits;
  }

  public set dayHabits(dayHabitsList: DayHabit[]) {
    this.props.dayHabits = dayHabitsList;
  }
}
