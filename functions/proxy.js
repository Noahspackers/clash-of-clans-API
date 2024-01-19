const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
      '/api2',
      createProxyMiddleware({
        target: 'https://endzone-clan.de',
        changeOrigin: true,
      })
    );
  };