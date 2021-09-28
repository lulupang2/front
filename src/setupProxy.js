const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (root) {
    root.use(
        '/api',
        createProxyMiddleware({
            target: 'http://testest2.cf:4000',
            changeOrigin: true,
        })
    );
};
