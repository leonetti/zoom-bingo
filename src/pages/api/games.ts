import { NextApiRequest, NextApiResponse } from 'next';

export default function getAllGames(req: NextApiRequest, res: NextApiResponse) {
  res.json({ message: 'get request successful', method: req.method });
}
