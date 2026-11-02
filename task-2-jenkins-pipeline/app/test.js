const assert = require('assert');
const http = require('http');
const server = require('./server');

const TEST_PORT = 3005;

server.listen(TEST_PORT, () => {
  http.get(`http://localhost:${TEST_PORT}/health`, (res) => {
    assert.strictEqual(res.statusCode, 200, 'Health endpoint should return 200 OK');
    let data = '';
    res.on('data', chunk => { data += chunk; });
    res.on('end', () => {
      const parsed = JSON.parse(data);
      assert.strictEqual(parsed.status, 'UP', 'Status must be UP');
      console.log('✓ All Jenkins automated tests passed successfully!');
      server.close();
      process.exit(0);
    });
  }).on('error', (err) => {
    console.error('Test failed:', err);
    server.close();
    process.exit(1);
  });
});
