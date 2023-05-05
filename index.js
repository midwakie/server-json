require('dotenv').config();

const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');
app.use(express.static(path.join(__dirname, 'data')));
app.use('/images', express.static(path.join(__dirname, 'assets')));

const ipAddress = process.env.IP_ADDRESS;
const port = process.env.PORT;

app.get('/data/:filename', (req, res) => {
  const { filename } = req.params;
  res.sendFile(path.join(__dirname, 'data', filename));
});


app.listen(port, () => {
  console.log(`Server listening at http://${ipAddress}:${port}`);
});
