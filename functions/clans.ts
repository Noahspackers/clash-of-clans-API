import express from 'express';
import axios from 'axios';
import { Request, Response } from 'express';
import { accessToken } from "../src/service/proxy";
import cors from "cors";  
import serverless from 'serverless-http';
import { Handler } from '@netlify/functions';
const app = express();

const endzone = "#2YPY9PLUU";
const firstzone = "#2YQQ80QGL";
const secondzone = "#2QQPYRRCU";
app.use(cors({ origin: '*' }));

app.get(`https://api-endzone-clan.netlify.app/clans/endzone`, async (req: Request, res: Response) => {
  try {
      const response = await axios.get(`https://api.clashofclans.com/v1/clans/${encodeURIComponent(endzone)}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
          mode: "no-cors",
        },
      });
      const data = response.data;
    res.json(data);

  } catch (error) {
    console.error('Error fetching data from Clash of Clans API:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.get(`https://api-endzone-clan.netlify.app/clans/secondzone`, async (req: Request, res: Response) => {
  try {
      const response = await axios.get(`https://api.clashofclans.com/v1/clans/${encodeURIComponent(secondzone)}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
          mode: "no-cors",
        },
      });
      const data = response.data;
    res.json(data);

  } catch (error) {
    console.error('Error fetching data from Clash of Clans API:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.get(`https://api-endzone-clan.netlify.app/clans/firstzone`, async (req: Request, res: Response) => {
  try {
      const response = await axios.get(`https://api.clashofclans.com/v1/clans/${encodeURIComponent(firstzone)}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
          mode: "no-cors",
        },
      });
      const data = response.data;
    res.json(data);

  } catch (error) {
    console.error('Error fetching data from Clash of Clans API:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports = app;