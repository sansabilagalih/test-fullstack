import { NextResponse } from 'next/server';

export async function GET() {
  const data = [
    { month: 'Jan', year: 2023, total: 120 },
    { month: 'Feb', year: 2023, total: 150 },
    { month: 'Mar', year: 2023, total: 180 },
    { month: 'Apr', year: 2023, total: 220 },
    { month: 'May', year: 2023, total: 250 },
    { month: 'Jun', year: 2023, total: 300 },
    { month: 'Jul', year: 2023, total: 280 },
    { month: 'Aug', year: 2023, total: 320 },
    { month: 'Sep', year: 2023, total: 350 },
    { month: 'Oct', year: 2023, total: 400 },
    { month: 'Nov', year: 2023, total: 450 },
    { month: 'Dec', year: 2023, total: 500 },
  ];

  return NextResponse.json(data);
}
