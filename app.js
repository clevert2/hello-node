const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log('Hello world received a request.');

  const target = process.env.TARGET || 'World';
  res.send(`Hello ${target}!`);
});

app.get('/test', (req, res) => {
  console.log('Hitting test endpoint.');

  const mymessage = req.query.message;
  res.send(mymessage);
  res.send(`Test endpoint - Hello world.    `);
});

const port = process.env.PORT || 8080;
module.exports = app.listen(port, () => {
  console.log('Hello world listening on port', port);
});
