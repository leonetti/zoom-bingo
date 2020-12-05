import { NextApiRequest, NextApiResponse } from 'next';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

async function openDb() {
  return open({
    filename: './database.db',
    driver: sqlite3.Database,
  });
}

/**
  * @desc gets all games under a specific game by id
  * @param object req - the api request
  * @param object res - the api response
  * @return array - result contains meeting ids
*/
export default async function getGameMeetingsById(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.status(405).json({ message: 'Accept only GET requests' });
  }

  const db = await openDb();
  const meetings = await db.all('SELECT * FROM Meeting WHERE gameId = ?', [req.query.id]);
  res.json(meetings);
}
