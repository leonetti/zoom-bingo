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
  * @desc gets a game by id
  * @param object req - the api request
  * @param object res - the api response
  * @return obj - result contains name, id, rules
*/
export default async function getGameById(req: NextApiRequest, res: NextApiResponse) {
  const {
    method,
    query: { game_id: GAME_ID },
    body: { name, rules },
  } = req;

  if (method !== 'PUT' && method !== 'GET') {
    res.setHeader('Allow', ['GET', 'PUT']);
    res.status(405).end(`Method ${method} Not Allowed`);
  }

  const db = await openDb();

  if (method === 'PUT') {
    const updateGameByIdQuery = 'UPDATE Game SET name = ?, rules = ? where id = ?';

    const statement = await db.prepare(updateGameByIdQuery);
    await statement.run(
      name,
      rules,
      GAME_ID,
    );
  }

  // Default method GET
  const getGameByIdQuery = 'SELECT * FROM Game WHERE id = ?';
  const game = await db.get(getGameByIdQuery, [GAME_ID]);
  res.status(200).json(game);
}
