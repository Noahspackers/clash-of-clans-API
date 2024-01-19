import { createProxyMiddleware } from 'http-proxy-middleware';

const options = {
  target: 'http://api.clashofclans.com/v1',
  changeOrigin: true,
  pathRewrite: {
    '^/.netlify/functions/api2': '',
  },
};

export const handler = createProxyMiddleware(options);