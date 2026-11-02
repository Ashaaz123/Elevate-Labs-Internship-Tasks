// DevOps Demo Microservice
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({
    status: 'online',
    version: '1.1.0',
    branch: process.env.GIT_BRANCH || 'main',
    commit: process.env.GIT_COMMIT || 'HEAD',
    timestamp: new Date().toISOString()
  });
});

app.get('/api/v1/info', (req, res) => {
  res.json({
    project: 'DevOps Git Version Control System',
    author: 'Elevate Labs Intern',
    guidelines: 'Trunk-Based / GitFlow Hybrid with PR Reviews'
  });
});

if (require.main === module) {
  app.listen(PORT, () => console.log(`Service running on port ${PORT}`));
}

module.exports = app;
