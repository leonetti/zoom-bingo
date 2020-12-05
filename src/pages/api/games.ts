import { NextApiRequest, NextApiResponse } from 'next';

/**
  * @desc gets a list of all games
  * @param object req - the api request
  * @param object res - the api response
  * @return array - array of games with id and name information
*/
export default function getAllGames(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.status(405).json({ message: 'Accept only GET requests' });
  }
  res.json([{ name: 'Bingo', id: 1 }, { name: 'Checkers', id: 2 }]);
}
