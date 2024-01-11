// functions/clans.ts
import axios from 'axios';
import { Handler, HandlerEvent } from '@netlify/functions';
import { accessToken } from './proxy';

const endzone = "#2YPY9PLUU";
const firstzone = "#2YQQ80QGL";
const secondzone = "#2QQPYRRCU";

export const handler: Handler = async (event: HandlerEvent, context) => {
  try {
    let clanTag: string | number | boolean;
    switch (event.path) {
      case '/clans/endzone':
        clanTag = endzone;
        break;
      case '/clans/secondzone':
        clanTag = secondzone;
        break;
      case '/clans/firstzone':
        clanTag = firstzone;
        break;
      default:
        return {
          statusCode: 404,
          body: JSON.stringify({ error: 'Not Found' }),
        };
    }

    const response = await axios.get(`https://api.clashofclans.com/v1/clans/${encodeURIComponent(clanTag)}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
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
