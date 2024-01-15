import axios from 'axios';
import { Handler, HandlerEvent } from '@netlify/functions';
import { accessToken } from './accestoken';
import express from 'express';


const endzone = "#2YPY9PLUU";
const firstzone = "#2YQQ80QGL";
const secondzone = "#2QQPYRRCU";




const app = express();
const port = process.env.PORT || 5000;

app.use(express.static('build'));

app.get('/api/clash-of-clans', async (req, res) => {
  try {
    const response = await axios.get(`https://api.clashofclans.com/v1/clans/${encodeURIComponent(endzone)}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
