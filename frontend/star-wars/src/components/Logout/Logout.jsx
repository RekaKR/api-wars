import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Logout = () => {
  const [response, setResponse] = useState('');

  useEffect(() => {
    axios({
      method: 'GET',
      withCredentials: true,
      url: 'http://localhost:8000/logout',
    })
      .then((res) => setResponse(res.data))
      .then(() => {
        console.log('logged out');
      });
  });

  useEffect(() => {
    if (response) {
      window.location.href = '/home';
    }
  }, [response]);

  return (
    <div>
      <h1>{response ? response : ''}</h1>
    </div>
  );
};

export default Logout;
