import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const User = () => {
  const [response, setResponse] = useState(false);
  const history = useHistory();

  useEffect(() => {
    axios({
      method: 'GET',
      withCredentials: true,
      url: 'http://localhost:8000/user',
    }).then((res) => setResponse(res.data.username));
  });

  return (
    <div className="user">
      {response ===
        '"You are not logged in, please log in to view your profile."'
        ? setTimeout(function () {
          let path = `/login`;
          history.push(path);
        })
        : `Username: ${response}`}
    </div>
  );
};

export default User;
