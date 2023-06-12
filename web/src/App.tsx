import { useEffect, useState } from 'react';
import './styles/global.css';
import './lib/dayjs';
import { Header } from './components/Header';
import { SummaryTable } from './components/SummaryTable';
import { api } from './lib/axios';

export type Summary = {
  id: string;
  date: string;
  amount: number;
  completed: number;
}[];

export function App() {
  const [summary, setSummary] = useState<Summary>([]);

  useEffect(() => {
    api.get('summary').then((response) => setSummary(response.data))
  }, []);

  async function handleSummaryChange() {
    await api.get('summary').then((response) => setSummary(response.data))
  }

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='w-full max-w-5xl px-6 flex flex-col gap-16'>
        <Header handleSummaryChange={handleSummaryChange} />
        <SummaryTable summary={summary} />
      </div>
    </div>
  );
}
