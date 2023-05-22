interface Summary {
  id: string;
  date: string;
  completed: number;
  amount: number;
}

export abstract class SummaryRepository {
  abstract query(): Promise<Summary>;
}
