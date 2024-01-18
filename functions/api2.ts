import fetch, { Headers } from "node-fetch";
import { accessToken } from "../src/service/accestoken";
const endzone = "#2YPY9PLUU";
const firstzone = "#2YQQ80QGL";
const secondzone = "#2QQPYRRCU";
const expressApp = require('./proxy');

const API = "https://api.clashofclans.com/v1";
module.exports.handler = async function (event, context) {
  console.log('Incoming request to /api from Netlify:', event.path);
  const clans = `${API}/clans/${encodeURIComponent(endzone)}`;
  const headers = new Headers();
  headers.set("Authorization", `Bearer ${accessToken}`);
  const response = await fetch(clans, { headers });
  const data = await response.json();
  return {
    statusCode: 200,
    body: JSON.stringify({
      data
    }),
  };
}
