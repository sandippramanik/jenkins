const express = require('express');
const path = require('path');
const app = express();
const dirName = path.resolve();
app.use(express.static(path.join(dirName, '/frontend/build')));
app.get('/login', (req, res) => {
  res.send('Please login');
});
app.get('*', (req, res) => {
  res.sendFile(path.join(dirName, '/frontend/build/index.html'));
});
app.listen(5000, () => {
  console.log('Server is running on 5000');
});
