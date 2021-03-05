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
import Voting from './components/Voting/Voting';
function App() {
  const [response, setResponse] = useState('');

  useEffect(() => {
    axios({
      method: 'GET',
      withCredentials: true,
      url: 'http://localhost:8000/home',
    }).then((res) => setResponse(res.data.username));
  });
  console.log('App response logging: ', response);
  return (
    <Router>
      <div className='App'>
        <NavigationBar username={response} />
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
            <Route path='/voting'>
              <Voting />
            </Route>
            <Route path='/home'>
              <IndexPage username={response} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
