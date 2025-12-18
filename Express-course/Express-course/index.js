const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

app.get('/profile', (req, res) => {
  res.send('User Profile Page');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.use((req, res, next) => {
  if (req.query.login === "santiago@nyxweb.com") {
    next();
  } else {
    res.send("Access Denied: Invalid Login");
  }
});

app.get("/dashboard", (req, res) => {
  res.send("Dashboard Page");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});