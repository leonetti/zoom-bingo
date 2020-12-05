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
  if (req.method !== 'POST' && req.method !== 'GET' && req.method !== 'PUT') {
    res.status(405).json({ message: 'Accept only GET, POST, and PUT requests' });
  }

  const db = await openDb();

  // PUT request
  if (req.method === 'PUT') {
    const statement = await db.prepare(
      'UPDATE game SET name = ?, rules = ? where id = ?',
    );
    await statement.run(
      req.body.name,
      req.body.rules,
      req.query.id,
    );
  }

  // GET request
  const game = await db.get('SELECT * FROM Game WHERE ID = ?', [req.query.id]);
  res.json(game);
}
