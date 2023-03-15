import { randomUUID } from 'crypto';

export interface DayProps {
  id: string;
  date: Date;
}

export class Day {
  private props: DayProps;

  constructor(props: DayProps) {
    this.props = {
      ...props,
      id: props.id ?? randomUUID(),
    };
  }

  public get id(): string {
    return this.props.id;
  }

  public get date(): Date {
    return this.props.date;
  }
}
