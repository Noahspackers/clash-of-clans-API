// netlify/functions/proxy/proxy-server.js
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Define the API endpoint you want to proxy
const apiEndpoint = 'https://api.clashofclans.com/v1';

// Create the proxy middleware
const apiProxy = createProxyMiddleware('/api', {
  target: apiEndpoint,
  changeOrigin: true,  // necessary for virtual hosted sites
  pathRewrite: {
    '^/api': '',  // remove the /api prefix when forwarding the request
  },
});

// Use the proxy middleware for /api requests
app.use('/api', apiProxy);

// Export the Express app
module.exports = app;
