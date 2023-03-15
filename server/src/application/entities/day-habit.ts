import { randomUUID } from 'crypto';

import { Day } from "./day";
import { Habit } from "./habit";

export interface DayHabitProps {
  id: string;
  habit: Habit;
  day: Day;
}

export class DayHabit {
  private props: DayHabitProps;

  constructor(props: DayHabitProps) {
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

  public get dayId(): string {
    return this.props.day.id;
  }
}
