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
  } = req;

  switch (method) {
    case 'GET': {
      const db = await openDb();
      const game = await db.get('SELECT * FROM Game WHERE ID = ?', [GAME_ID]);
      res.status(200).json(game);
      break;
    }
    case 'PUT': {
      const db = await openDb();
      const statement = await db.prepare(
        'UPDATE game SET name = ?, rules = ? where id = ?',
      );
      await statement.run(
        req.body.name,
        req.body.rules,
        req.query.id,
      );
      break;
    }
    default:
      res.setHeader('Allow', ['GET', 'PUT']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
