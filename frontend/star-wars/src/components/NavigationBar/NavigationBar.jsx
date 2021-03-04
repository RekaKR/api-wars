import React, { useState, useEffect } from 'react';
import './NavigationBar.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../../style/CSS/NavigationBar/NavigationBar.css';

import DisplayUserName from '../DisplayUserName/DisplayUserName';
const NavigationBar = () => {
  // const [userName, setUserName] = useState('');
  // useEffect(() => {
  //   setUserName(<DisplayUserName />);
  // });
  return (
    <div className='navigationBar'>
      <ul>
        <li>
          <Link to='/home'> Home</Link>
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
          <Link to='/user'>My account</Link>
        </li>
        <li>
          <Link to='/logout'>Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavigationBar;
