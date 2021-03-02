import './App.css';
import React from 'react';
import IndexPage from './components/IndexPage/IndexPage.jsx';
import NavigationBar from './components/NavigationBar/NavigationBar';
//import Pagination from './components/Pagination/Pagination.jsx';
import Login from './components/Login/Login';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Register from './components/Register/Register';

function App() {
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
            <Route exact path='/'>
              <IndexPage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
