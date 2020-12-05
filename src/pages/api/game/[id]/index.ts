import { NextApiRequest, NextApiResponse } from 'next';

/**
  * @desc gets a game by id
  * @param object req - the api request
  * @param object res - the api response
  * @return obj - result contains name, id, rules
*/
export default function getGameById(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST' && req.method !== 'GET') {
    res.status(405).json({ message: 'Accept only GET and POST requests' });
  }
  res.json({ id: req.query.id, name: 'Bingo', rules: ['rule 1', 'rule 2', 'rule 3'] });
}
