import axios from 'axios';
import { Handler, HandlerEvent } from '@netlify/functions';
import { accessToken } from './accestoken';

const API_KEY = `${accessToken}`; // Replace with your Clash of Clans API access token

const endzone = "#2YPY9PLUU";
const firstzone = "#2YQQ80QGL";
const secondzone = "#2QQPYRRCU";

export const handler: Handler = async (event: HandlerEvent, context) => {
  try {
    let url = '';
    switch (event.path) {
      case '/clans/endzone':
        url = `https://api.clashofclans.com/v1/clans/${encodeURIComponent(endzone)}`;
        break;
      case '/clans/secondzone':
        url = `https://api.clashofclans.com/v1/clans/${encodeURIComponent(secondzone)}`;
        break;
      case '/clans/firstzone':
        url = `https://api.clashofclans.com/v1/clans/${encodeURIComponent(firstzone)}`;
        break;
      default:
        return {
          statusCode: 404,
          body: JSON.stringify({ error: 'Not Found' }),
        };
    }

    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    console.error('Error fetching data from Clash of Clans API:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};
