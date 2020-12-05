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

  if (method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${method} Not Allowed`);
  }

  const db = await openDb();

  // Default GET method
  const getAllMeetingsQuery = `SELECT
    meetingId,
    gameId,
    COUNT(DISTINCT User.id) As userCount
  FROM Meeting INNER JOIN User ON Meeting.id = User.meetingId
  GROUP BY meetingId`;

  const getMeetingsByGameIdQuery = `SELECT
    meetingId,
    gameId,
    COUNT(DISTINCT User.id) As userCount
  FROM Meeting INNER JOIN User ON Meeting.id = User.meetingId
  WHERE gameId = ?
  GROUP BY meetingId`;

  const meetings = GAME_ID
    ? await db.all(getMeetingsByGameIdQuery, [GAME_ID])
    : await db.all(getAllMeetingsQuery);
  res.json(meetings);
}
