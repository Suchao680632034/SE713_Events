import express from 'express'
import type { Request, Response } from 'express'
import eventRoute from './routes/EventRoute';

import { get } from 'node:http';
const app = express()
app.use(express.json());
app.use('/events', eventRoute);
const port = 3000


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})

app.get('/test', (req: Request, res: Response) => {
    const id = req.query.id;   
    const output = `id: ${id}`;
    res.send(output);
  })



