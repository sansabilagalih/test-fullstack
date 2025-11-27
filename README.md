# Crypto Dashboard

A modern, responsive crypto dashboard built with Next.js and Tailwind CSS.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices.
- **Dark Mode**: Sleek dark theme optimized for crypto trading aesthetics.
- **Dashboard**: Visualizes key metrics like Total Deposits and Registrations.
- **Crypto Market**: Displays live-like crypto prices and market data.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Language**: TypeScript

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser.

## API Documentation

The project includes internal API endpoints to serve statistical data.

### 1. Get Registration Stats

Returns the total number of new user registrations per month.

- **Endpoint**: `/api/stats/registrations`
- **Method**: `GET`
- **Response Example**:
  ```json
  [
    { "month": "Jan", "year": 2023, "total": 120 },
    { "month": "Feb", "year": 2023, "total": 150 },
    ...
  ]
  ```

### 2. Get Deposit Stats

Returns the total amount of deposits per month (in IDR).

- **Endpoint**: `/api/stats/deposits`
- **Method**: `GET`
- **Response Example**:
  ```json
  [
    { "month": "Jan", "year": 2023, "total": 50000000 },
    { "month": "Feb", "year": 2023, "total": 75000000 },
    ...
  ]
  ```

## Project Structure

- `app/`: Next.js App Router pages and API routes.
- `components/`: Reusable UI components (Navbar, Sidebar, Charts, etc.).
- `public/`: Static assets.
