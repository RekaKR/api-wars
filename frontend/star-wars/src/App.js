import './style/CSS/App/App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import IndexPage from './components/IndexPage/IndexPage.jsx';
import NavigationBar from './components/NavigationBar/NavigationBar';
//import Pagination from './components/Pagination/Pagination.jsx';
import Login from './components/Login/Login';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Register from './components/Register/Register';
import Logout from './components/Logout/Logout';
import User from './components/User/User';

function App() {
  const [response, setResponse] = useState('');

  useEffect(() => {
    axios({
      method: 'GET',
      withCredentials: true,
      url: 'http://localhost:8000/home',
    }).then((res) => setResponse(JSON.stringify(res.data)));
  });
  console.log('App response logging: ', response);
  return (
    <Router>
      <div className='App'>
        <NavigationBar />
        <div className='content'>
          <Switch>
            <Route path='/register'>
              <Register />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/logout'>
              <Logout />
            </Route>
            <Route path='/user'>
              <User />
            </Route>
            <Route path='/home'>
              <IndexPage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
