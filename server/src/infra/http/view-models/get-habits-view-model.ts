import { Habit } from "../../../application/entities/habit";

export class GetHabitsViewModel {
  static toHTTP(habit: Habit) {
    return {
      id: habit.id,
      title: habit.title,
      createdAt: habit.createdAt,
    };
  }
}
