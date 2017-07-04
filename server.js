const express = require('express');
const path = require('path');
const jwt = require('jsonwebtoken');

let app = express();
app.use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }))
  .use(express.static(path.join(__dirname, 'dist')))
  .use( (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

let findUser = (db, user) => {
  return Object.keys(db).find(elem => elem === user);
};

let database = {
  'hello@wilsonyu.io': {
    user: 'hello@wilsonyu.io',
    password: 'lol'
  }
};

app.post('/signup', (req, res) => {
  let user = req.body.email;
  let password = req.body.password;
  let searchRes = findUser(database, user);
  let result;
  if (searchRes) { result = {token: null, status: 'USEREXISTS'} }
  else {
    database[user] = {
      user: user,
      password: password
    }
    let token = jwt.sign({user: user}, 'secret');
    result = { token: token, status: 'SUCCESS' }
  }
  res.send(result);
});

app.post('/signin', (req, res) => {
  let user = req.body.email;
  let password = req.body.password;
  let searchRes = findUser(database, user);
  let result;
  if (!searchRes || password !== database[user].password) {
    result = {token: null, status: 'USERORPWNOTCORRECT' }
  } else {
    let token = jwt.sign({user: user}, 'secret');
    result = {token: token, status: 'SUCCESS'};
  }
  res.send(result);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './dist/index.html'));
});

const port = process.env.PORT || '3000';
app.set('port', port);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});