const express = require('express');
const app = express();
const port = 3000;
const cors = require("cors");
app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies

const Users = [];

app.post('/signup', function(req, res) {
  const { email, password } = req.body;

  // Check if user already exists
  const userExists = Users.find(user => user.email === email);

  if (!userExists) {
    Users.push({ email, password });
    res.status(200).send('Signup successful!');
  } else {
    res.status(400).send('User already exists!');
  }
});

app.post('/login', function(req, res) {
  const { email, password } = req.body;

  // Check if user exists and password matches
  const user = Users.find(user => user.email === email);

  if (user && user.password === password) {
    res.status(200).json({ token: 'random-token-string' });
  } else {
    res.status(401).send('Invalid email or password');
  }
});


app.listen(port, function() {
  console.log(`Example app listening on port ${port}`);
});
