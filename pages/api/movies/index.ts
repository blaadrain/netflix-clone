import { NextApiRequest, NextApiResponse } from 'next';

import prismadb from '@/libs/prismadb';
import serverAuth from '@/libs/serverAuth';

export default async function hadnler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== 'GET') {
      res.status(405).end();
    }

    await serverAuth(req, res);

    const movies = await prismadb.movie.findMany();

    return res.status(200).json(movies);
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
