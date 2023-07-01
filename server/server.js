const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const app = require('./app');

dotenv.config({ path: path.join(__dirname, '.env') });

const MONGO_URI = process.env.MONGO_URI.replace(
  '<DB_USERNAME>',
  process.env.DB_USERNAME
).replace('<DB_PASSWORD>', process.env.DB_PASSWORD);

const PORT = process.env.PORT || 8000;

mongoose
  .connect(MONGO_URI)
  .then((con) => {
    console.log('Connection to DB successful - ', con.connection.host);
    app.listen(PORT, () => {
      console.log('Server started on PORT - ', PORT);
    });
  })
  .catch((err) => {
    console.log(err);
    process.exit();
  });
