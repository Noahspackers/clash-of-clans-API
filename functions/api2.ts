import fetch, { Headers } from "node-fetch";
import { accessToken } from "../src/service/accestoken";
import { Router } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const clan = "#2YPY9PLUU";
const firstzone = "#2YQQ80QGL";
const secondzone = "#2QQPYRRCU";

const router = Router();
const API = "https://api.clashofclans.com/v1";

exports.handler = async function (event, context) {
     
  const proxy = createProxyMiddleware({
    target: 'https://endzone-clan.de',
    changeOrigin: true,
    
    onProxyReq: (proxyReq, req) => {
        proxyReq.setHeader("Authorization", `Bearer ${accessToken}`);
        proxyReq.setHeader("Host", "api.clashofclans.com");
        proxyReq.setHeader("X-Forwarded-For", "62.157.65.210");
        proxyReq.setHeader("X-Real-IP", "62.157.65.210");
    }
  });

    try {
        const clans = `${API}/clans/${encodeURIComponent(clan)}`;
        const headers = new Headers();
        headers.set("Authorization", `Bearer ${accessToken}`);
        console.log(event.path);
        const response = await fetch(clans, { headers });
        const data = await response.json();
        console.log(data.tag);
    return {
      statusCode: 200,
      body: JSON.stringify({ data }),
     
};
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify({
                error: "Internal Server Error",
            }),
        };
        
    }
    
};
