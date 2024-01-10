import express from 'express';
import axios from 'axios';
import { Request, Response } from 'express';
import { accessToken } from "../src/service/proxy";
import cors from "cors";  
import serverless from 'serverless-http';

const app = express();

const endzone = "#2YPY9PLUU";
const firstzone = "#2YQQ80QGL";
const secondzone = "#2QQPYRRCU";
app.use(cors());

export default function clans() {
app.get(`/clans/endzone`, async (req: Request, res: Response) => {
  try {
    const response = await axios.get(`https://api.clashofclans.com/v1/clans/${encodeURIComponent(endzone)}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
        mode: "no-cors",
      },
      responseType: 'json',
    });
    const data = response.data;
    res.header("Content-Type", "application/json");
    res.json(data);
  } catch (error) {
    console.error('Error fetching data from Clash of Clans API:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get(`/clans/secondzone`, async (req: Request, res: Response) => {
  try {
    const response = await axios.get(`https://api.clashofclans.com/v1/clans/${encodeURIComponent(secondzone)}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
        mode: "no-cors",
      },
      responseType: 'json',
    });
    const data = response.data;
    res.header("Content-Type", "application/json");
    res.json(data);
  } catch (error) {
    console.error('Error fetching data from Clash of Clans API:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get(`/clans/firstzone`, async (req: Request, res: Response) => {
  try {
    const response = await axios.get(`https://api.clashofclans.com/v1/clans/${encodeURIComponent(firstzone)}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
        mode: "no-cors",
      },
      responseType: 'json',
    });
    res.header("Content-Type", "application/json");
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error('Error fetching data from Clash of Clans API:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
};
clans();
export const handler = serverless(app);