const express = require("express");
const app = express();
const path = require("path");
const dotenvv= require("dotenv").config();
const logger = require ('./utils/logger');


app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend/dist')));


app.use((err, req, res, next) => {
  logger.error(err.message);
  console.error(err.message);
  res.status(500).send('Something went wrong!');
});
const port =  3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
