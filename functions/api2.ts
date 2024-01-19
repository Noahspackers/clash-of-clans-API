import fetch, { Headers } from "node-fetch";
import { accessToken } from "../src/service/accestoken";

const endzone = "#2YPY9PLUU";
const firstzone = "#2YQQ80QGL";
const secondzone = "#2QQPYRRCU";


const API = "https://api.clashofclans.com/v1";

exports.handler = async function (event, context) {
  // Redirect /api2 to the target URL
  if (event.path === '/.netlify/functions/api2') {
    const clans = `${API}/clans/${encodeURIComponent(endzone)}`;
    const headers = new Headers();
    headers.set('Authorization', `Bearer ${accessToken}`);
    const response = await fetch(clans, { headers });

    if (response.ok) {
      const data = await response.json();
      return {
        statusCode: 200,
        body: JSON.stringify({ data }),
      };
    } else {
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: `API request failed with status ${response.status}` }),
      };
    }
  }

  // If no matching route, return a 404 response
  return {
    statusCode: 404,
    body: JSON.stringify({ error: 'Not Found' }),
  };
};