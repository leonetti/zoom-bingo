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
  const {
    method,
  } = req;

  if (method !== 'GET') {
    res.status(405).end(`Method ${method} Not Allowed`);
  }

  const db = await openDb();

  // Default method GET
  const getAllGamesQuery = 'SELECT * FROM Game';
  const games = await db.all(getAllGamesQuery);
  res.status(200).json(games);
}
