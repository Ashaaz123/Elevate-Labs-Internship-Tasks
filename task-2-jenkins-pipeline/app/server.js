const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({
      status: 'UP',
      pipeline: 'Jenkins CI/CD',
      uptime: process.uptime(),
      timestamp: new Date().toISOString()
    }));
  }

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Jenkins CI/CD Deployed Application</title>
      <style>
        body { font-family: sans-serif; background: #1e1e2f; color: #fff; text-align: center; padding-top: 80px; }
        .box { background: #27293d; display: inline-block; padding: 40px; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.5); }
        h1 { color: #00d68f; }
      </style>
    </head>
    <body>
      <div class="box">
        <h1>Jenkins CI/CD Pipeline Success</h1>
        <p>This service was built, tested, and containerized by Jenkins!</p>
        <p>Stage: <strong>Production / Staging</strong></p>
      </div>
    </body>
    </html>
  `);
});

if (require.main === module) {
  server.listen(PORT, () => {
    console.log(`Jenkins demo app running on port ${PORT}`);
  });
}

module.exports = server;
