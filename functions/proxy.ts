// netlify/functions/proxy/proxy-server.js
import express from 'express';
import { createProxyMiddleware }from 'http-proxy-middleware';

const app = express();

// Define the API endpoint you want to proxy
const apiEndpoint = 'https://api.clashofclans.com/v1';

// Create the proxy middleware
const apiProxy = createProxyMiddleware('/api', {
    target: apiEndpoint,
    changeOrigin: true,
    pathRewrite: {
      '^/api': '',
    },
  });

// Use the proxy middleware for /api requests
app.use('/api', apiProxy);

// Export the Express app
module.exports = app;
