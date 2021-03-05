import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import {
  useHistory,
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

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
    marginTop: 20,
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

  const [registerUsername, setRegisterUsername] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [error, setError] = useState(false);
  const [response, setResponse] = useState('');
  const history = useHistory();

  const register = () => {
    if (registerUsername && registerPassword)
      axios({
        method: 'POST',
        data: {
          username: registerUsername,
          password: registerPassword,
        },
        withCredentials: true,
        url: 'http://localhost:8000/register',
      })
        .then((res) => setResponse(res.data))
        .then(() => setError(false));
    else setError(true);
  };

  useEffect(() => {
    if (response === 'Successful registration. Log in to continue.') {
      setTimeout(function () {
        let path = `/login`;
        history.push(path);
      }, 1000);
    }
  }, [response]);

  return (
    <Container component='main' maxWidth='xs' style={{ backgroundColor: "white", borderRadisu: "40px", paddingBottom: "10px" }}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5' style={{ color: "black", marginTop: '5px' }}>
          Register
        </Typography>

        {response ? <Typography color='secondary'>{response}</Typography> : ''}

        <form className={classes.form} noValidate>
          <TextField variant='outlined' margin='normal' required fullWidth id='userName' label='Username' name='userName' onChange={(e) => setRegisterUsername(e.target.value)} required />
          <TextField variant='outlined' margin='normal' required fullWidth name='password' label='Password' type='password' id='password' onChange={(e) => setRegisterPassword(e.target.value)} required />
          <Button type='button' fullWidth variant='contained' color='primary' onClick={register} className={classes.submit}>
            Register
          </Button>
        </form>

        {error ? (<Typography color='secondary'>Please, fill in both fields.</Typography>) : ('')}
      </div>

      <div>
        Already have an account? <a href='/login'> Login!</a>
      </div>
    </Container>
  );
}
