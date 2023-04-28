import { randomUUID } from 'crypto';
import { Replace } from '../../helpers/Replace';

export interface DayHabitProps {
  id: string;
  habitId: string;
  dayId: string;
}

export class DayHabit {
  private props: DayHabitProps;

  constructor(props: Replace<DayHabitProps, { id?: string }>) {
    this.props = {
      ...props,
      id: props.id ?? randomUUID(),
    };
  }

  public get id(): string {
    return this.props.id;
  }

  public get habitId(): string {
    return this.props.habitId;
  }

  public get dayId(): string {
    return this.props.dayId;
  }
}
