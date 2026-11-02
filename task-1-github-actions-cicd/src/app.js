const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Application Health Check Endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    service: 'nodejs-demo-app',
    version: '1.0.0'
  });
});

// Root Endpoint
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Elevate Labs DevOps Demo App</title>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #0f172a; color: #f8fafc; text-align: center; padding: 50px; }
        .card { background: #1e293b; border-radius: 12px; padding: 40px; max-width: 600px; margin: 0 auto; box-shadow: 0 10px 25px rgba(0,0,0,0.5); border: 1px solid #334155; }
        h1 { color: #38bdf8; }
        .badge { display: inline-block; padding: 6px 14px; background: #0284c7; color: #fff; border-radius: 9999px; font-size: 14px; font-weight: bold; }
        .info { margin-top: 20px; font-size: 15px; color: #94a3b8; }
      </style>
    </head>
    <body>
      <div class="card">
        <span class="badge">CI/CD Automated Deployment</span>
        <h1>Welcome to Elevate Labs DevOps Demo</h1>
        <p>This web application is automatically tested and deployed via GitHub Actions and Docker!</p>
        <div class="info">
          <p>Environment: <strong>Production</strong></p>
          <p>Status: <strong style="color: #4ade80;">Active &amp; Healthy</strong></p>
        </div>
      </div>
    </body>
    </html>
  `);
});

// Sample Calculator API for Unit Testing
app.post('/api/calculate', (req, res) => {
  const { a, b, operation } = req.body;
  if (typeof a !== 'number' || typeof b !== 'number') {
    return res.status(400).json({ error: 'Parameters a and b must be numbers' });
  }

  let result;
  switch (operation) {
    case 'add':
      result = a + b;
      break;
    case 'subtract':
      result = a - b;
      break;
    case 'multiply':
      result = a * b;
      break;
    case 'divide':
      if (b === 0) return res.status(400).json({ error: 'Division by zero is not allowed' });
      result = a / b;
      break;
    default:
      return res.status(400).json({ error: 'Supported operations: add, subtract, multiply, divide' });
  }

  res.json({ a, b, operation, result });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Demo app listening on port ${PORT}`);
  });
}

module.exports = app;
