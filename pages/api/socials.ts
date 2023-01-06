// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { socials } from './data/socials';
import { socialsType } from '../../types';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<socialsType[]>
) {
    if (req.method === 'GET') {
        res.status(200).json(socials);
    }
}
