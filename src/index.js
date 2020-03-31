const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('src/html'));
app.use(express.urlencoded());

app.get('/timer', (req, res) => {
  console.log(req.query);
  res.sendFile(path.join('./timer/index.html'));
});

app.post('/set-timer', (req, res) => {
  console.log(JSON.stringify(req.body));
  res.redirect('/timer?hour='+req.body.hour)
});

app.listen(3000, () => console.log('See it? Yes? No?'));