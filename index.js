const express = require('express');
const bodyParser = require('body-parser');
const browserbear = require('./browserbear');
const alertService = require('./alertService');

const app = express();
const port = 3000;

app.use(bodyParser.json());

let oldPrice = 0;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/job-done', (req, res) => {
  const currentPrice = req.body.outputs['d26njEyD41OyW3gol4_save_text'];
  console.log('Job done, current price is ' + currentPrice);
  
  if(!oldPrice) {
    oldPrice = currentPrice;
  }
  if (currentPrice != oldPrice) {
    console.log(`Price has changed from ${oldPrice} to ${currentPrice}.`);
    alertService.sendEmail(oldPrice, currentPrice);
    oldPrice = currentPrice;
  }
  browserbear.checkPrice();
});

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`);
  browserbear.checkPrice();
});
