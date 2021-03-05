import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../../style/CSS/NavigationBar/NavigationBar.css';

import DisplayUserName from '../DisplayUserName/DisplayUserName';
const NavigationBar = (props) => {
  return (
    <div className='navigationBar'>
      <ul>
        <li>
          <Link to='/home'>Planet list</Link>
        </li>
        <li>
          <li>
            {props.username ? <Link to='/voting'>Voting statistics</Link> : ''}
          </li>
        </li>
        <li>
          {props.username ? '' : <Link to='/register'>Registration</Link>}
        </li>
        <li>{props.username ? '' : <Link to='/login'>Login</Link>}</li>
        <li>
          <li>{props.username ? <Link to='/user'>My account</Link> : ''}</li>
        </li>
        <li>
          <li>{props.username ? <Link to='/logout'>Logout</Link> : ''}</li>
        </li>
        <li>
          <DisplayUserName username={props.username} />
        </li>
      </ul>
    </div>
  );
};

export default NavigationBar;
