const express = require('express');
const app = express();
const port = 3000;

const createBid = require('./createBid/createBid');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/createBid', (req, res) => {
  console.log('Body', req.body);
  const response = createBid(req.body);
  res.send(response);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})