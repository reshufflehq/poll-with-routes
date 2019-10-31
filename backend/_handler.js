import { defaultHandler } from '@reshuffle/server-function';

import { get } from '@reshuffle/db';
import express from 'express';

const app = express();

app.get('/poll-data', async (req, res) => {
  const votes = (await get('pollVotes')) || {};
  return res.json(votes);
});

app.use(defaultHandler);

export default app;
