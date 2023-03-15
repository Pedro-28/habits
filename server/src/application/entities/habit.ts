import { randomUUID } from 'crypto';
import { Replace } from '../../helpers/Replace';


export interface HabitProps {
  id: string;
  title: string;
  createdAt: Date;
}

export class Habit {
  private props: HabitProps;

  constructor({ id, title, createdAt }: Replace<HabitProps, { id?: string, createdAt?: Date }>) {
    this.props = {
      id: id ?? randomUUID(),
      title,
      createdAt: createdAt ?? new Date(),
    };
  }

  public get id(): string {
    return this.props.id;
  }

  public get title(): string {
    return this.props.title;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }
}