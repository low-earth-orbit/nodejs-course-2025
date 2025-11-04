const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
  console.log("First middleware!");
  next();
});

app.use('/users', (req, res, next) => {
  console.log('Second middleware!');
  res.send('<h1>The "Users" Page</h1>');
});

app.use('/', (req, res, next) => {
  console.log("Second middleware!");
  res.send('<h1>This is assignment 2</h1>');
});

app.listen(3000);
