import { NextApiRequest, NextApiResponse } from 'next';

/**
  * @desc gets all games under a specific game by id
  * @param object req - the api request
  * @param object res - the api response
  * @return array - result contains meeting ids
*/
export default function getGameMeetingsById(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.status(405).json({ message: 'Accept only GET requests' });
  }
  res.json([1, 2, 3, 4, 5]);
}
