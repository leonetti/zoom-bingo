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
  const {
    method,
    query: { game_id: GAME_ID },
  } = req;

  switch (method) {
    case 'GET': {
      const db = await openDb();
      const meetings = GAME_ID
        ? await db.all('SELECT meetingId, gameId, COUNT(DISTINCT User.id) FROM Meeting INNER JOIN User ON Meeting.id = User.meetingId WHERE gameId = ? GROUP BY meetingId', [GAME_ID])
        : await db.all('SELECT meetingId, gameId, COUNT(DISTINCT User.id) FROM Meeting INNER JOIN User ON Meeting.id = User.meetingId GROUP BY meetingId');
      res.json(meetings);
      break;
    }
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
