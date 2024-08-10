// pages/api/data.ts

import type { NextApiRequest, NextApiResponse } from 'next';

// Фіктивні дані для прикладу
const data = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Повертає дані у форматі JSON
    res.status(200).json(data);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
