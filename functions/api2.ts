import fetch, { Headers } from "node-fetch";
import os from "os";
import { accessToken } from "../src/service/accestoken";
import { Router } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware'

const endzone = "#2YPY9PLUU";
const firstzone = "#2YQQ80QGL";
const secondzone = "#2QQPYRRCU";

const router = Router();

const options = {
    target: 'https://endzone-clan.de', // target host
    changeOrigin: true, // needed for virtual hosted sites
    pathRewrite: {
       [``]: '',
    }, // rewrites our endpoints to '' when forwarded to our target
}
router.get('/api2', createProxyMiddleware(options));

const API = "https://api.clashofclans.com/v1";

exports.handler = async function (event, context) {

  console.log('Incoming request to /api from Netlify:', event.path);
  const clans = `${API}/clans/${encodeURIComponent(endzone)}`;
  const headers = new Headers();
  headers.set("Authorization", `Bearer ${accessToken}`);
  const response = await fetch(clans, { headers });
  const data = await response.json();
  console.log()
  return {
    statusCode: 200,
    body: JSON.stringify({
      data
    }),
  };
}
