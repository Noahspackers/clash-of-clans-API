import { createProxyMiddleware } from 'http-proxy-middleware';

const options = {
  target: 'https://api.clashofclans.com/v1',
  changeOrigin: true,
  pathRewrite: {
    '^/.netlify/functions/api2': 'https://endzone-clan.de',
  },
};

export const handler = createProxyMiddleware(options);