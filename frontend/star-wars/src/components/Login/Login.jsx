import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import LockOpenIcon from '@material-ui/icons/LockOpen';
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();

  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [error, setError] = useState(false);

  const login = () => {
    if (loginUsername && loginPassword)
      axios({
        method: 'POST',
        data: {
          username: loginUsername,
          password: loginPassword,
        },
        withCredentials: true,
        url: 'http://localhost:8000/login',
      })
        .then((res) => console.log(res))
        .then(() => setError(false));
    else setError(true);
  };

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOpenIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Login
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='userName'
            label='Username'
            name='userName'
            onChange={(e) => setLoginUsername(e.target.value)}
            required
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            onChange={(e) => setLoginPassword(e.target.value)}
            required
          />
          <Button
            type='button'
            fullWidth
            variant='contained'
            color='primary'
            onClick={login}
            className={classes.submit}
          >
            Login
          </Button>
        </form>
        {error ? 'Please, fill in both fields.' : ''}
      </div>
    </Container>
  );
}
