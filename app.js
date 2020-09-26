const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin.js');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(adminRoutes);

app.use('/', (req, res, next) => {
  console.log('second middleware');
  res.send('<h1>Root</h1>')
});

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
