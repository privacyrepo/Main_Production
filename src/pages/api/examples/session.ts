// This is an example of how to access a session from an API route
import { authOptions } from '../auth/[...nextauth]'
import { unstable_getServerSession } from 'next-auth'

import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await unstable_getServerSession(req, res, authOptions)
  res.send(JSON.stringify(session, null, 2))
}
