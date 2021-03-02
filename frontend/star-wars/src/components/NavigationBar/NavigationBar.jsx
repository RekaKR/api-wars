import React from 'react';
import './NavigationBar.css';
import Login from '../Login/Login';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Register from '../Register/Register';
const NavigationBar = () => {
  return (
    <div className='navigationBar'>
      <ul>
        <li>
          <Link to='/'> Home</Link>
        </li>
        <li>
          <Link to=''>Planet list</Link>
        </li>
        <li>
          <Link to=''>Voting statistics</Link>
        </li>
        <li>
          <Link to='/register'>Registration</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to=''>Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavigationBar;
