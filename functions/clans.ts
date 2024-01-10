import express from 'express';
import axios from 'axios';
import { Request, Response } from 'express';
import { accessToken } from "../src/service/proxy";
import cors from "cors";  
import { Handler, HandlerEvent } from '@netlify/functions';
import exp from 'constants';

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
};

clans();

export const handler: Handler = async (event: HandlerEvent, context) => {
  // Create a fake Express request object
  const fakeRequest: Request = {
    method: 'GET', // or any other HTTP method you are handling
    url: event.path, // assuming event.path is the URL in the Netlify function event
    headers: event.headers,
    // Add other relevant properties based on your needs
  } as Request;

  // Create a fake Express response object
  const fakeResponse: Response = {
    send: (body) => {
      // Send the response body
      (fakeResponse as any).body = body; // Use 'as any' to avoid TypeScript error
    },
    // Implement other necessary methods and properties here
  } as Response;

  // Use your Express app with the fake request and response
  await app(fakeRequest, fakeResponse);

  // Extract the response from the fakeResponse object
  const result = {
    statusCode: fakeResponse.statusCode || 200,
    body: (fakeResponse as any).body, // Use 'as any' to avoid TypeScript error
    // Add other necessary properties based on your needs
  };

  return result;
};