const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const passport = require('passport');
const passportLocal = require('passport-local').Strategy;
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const session = require('express-session');

// const bodyParser = require('body-parser');
const app = express();
const User = require('./user');

const PORT = process.env.PORT || 8000;
app.use('/form', express.static('../frontend/star-wars/public'));
//Mongo db connect
mongoose.connect(
  'mongodb+srv://Marci:12345@marcicluster.aublm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log('Mongo db is connected');
  }
);
//Nemtom kellenek
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

//MIDDLEWARES

app.use(
  session({
    secret: 'secretsessioncode',
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser('secretsessioncode'));
app.use(passport.initialize());
app.use(passport.session());
require('./passportConfig')(passport);

//LOG IF USER IS AUTHENTICATED OR NOT AT EVERY REQUEST
app.use((req, res, next) => {
  if (req.user) {
    console.log('Auser exists');
  } else {
    console.log('Auser non exists');
  }
  next();
});

//CHeck if user ios logged in
app.get('/home', function (req, res) {
  if (req.user) {
    res.send(req.user);
  }
});

//LOGIN
app.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) throw err;
    if (!user)
      res.send({
        message: 'Bad username or password, try again son',
      });
    else {
      req.login(user, (err) => {
        if (err) throw err;
        res.send({ message: 'Succesfully authenticated.', user: req.user });
      });
    }
  })(req, res, next);
});
//REGISTER
app.post('/register', (req, res) => {
  User.findOne({ username: req.body.username }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send('Username already exists, please choose another one!');
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const newUser = new User({
        username: req.body.username,
        password: hashedPassword,
      });
      await newUser.save();
      res.send('Successful registration. Log in to continue.');
    }
  });
});
//GET USER
app.get('/user', (req, res) => {
  console.log(res.user);
  if (req.user) {
    res.send(req.user);
  } else {
    res.send('You are not logged in, please log in to view your profile.');
  }
});

//LOGOUT
app.get('/logout', (req, res) => {
  req.logout();
  res.send('Logged out');
  console.log('logged out');
});
app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
