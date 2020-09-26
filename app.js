const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/add', (req, res, next) => {
  res.send(`
    <form action="/product" method="POST">
      <input type="text" name="title">
      <button type="submit">submit</button>
    </form>
  `)
});

app.post('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

app.use('/', (req, res, next) => {
  console.log('second middleware');
  res.send('<h1>Root</h1>')
});

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
