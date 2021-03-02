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

//SAVE user sessions
app.use(
  session({
    secret: 'secretsessioncode',
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser('secretsessioncode'));

//LOGIN
app.post('/login', (req, res) => {
  console.log(req.body);
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
  console.log(req.body);
});

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
