import { NextResponse } from 'next/server';

export async function GET() {
  const data = [
    { month: 'Jan', year: 2023, total: 50000000 },
    { month: 'Feb', year: 2023, total: 75000000 },
    { month: 'Mar', year: 2023, total: 60000000 },
    { month: 'Apr', year: 2023, total: 90000000 },
    { month: 'May', year: 2023, total: 120000000 },
    { month: 'Jun', year: 2023, total: 150000000 },
    { month: 'Jul', year: 2023, total: 140000000 },
    { month: 'Aug', year: 2023, total: 180000000 },
    { month: 'Sep', year: 2023, total: 200000000 },
    { month: 'Oct', year: 2023, total: 250000000 },
    { month: 'Nov', year: 2023, total: 300000000 },
    { month: 'Dec', year: 2023, total: 350000000 },
  ];

  return NextResponse.json(data);
}
