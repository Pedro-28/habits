import { randomUUID } from 'crypto';

import { Replace } from "../../helpers/Replace";
import { Habit } from './habit';

export interface HabitWeekDayProps {
  id: string;
  habit: Habit;
  weekDay: number;
}

export class HabitWeekDay {
  private props: HabitWeekDayProps;

  constructor(props: Replace<HabitWeekDayProps, { id?: string }>) {
    this.props = {
      ...props,
      id: props.id ?? randomUUID(),
    };
  }

  public get id(): string {
    return this.props.id;
  }

  public get habitId(): string {
    return this.props.habit.id;
  }

  public get weekDay(): number {
    return this.props.weekDay;
  }
}
