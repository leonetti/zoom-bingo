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
  * @desc gets a list of all games
  * @param object req - the api request
  * @param object res - the api response
  * @return array - array of games with id and name information
*/
export default async function getAllGames(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.status(405).json({ message: 'Accept only GET requests' });
  }

  const db = await openDb();
  const games = await db.all('SELECT * FROM Game');
  res.json(games);
}
