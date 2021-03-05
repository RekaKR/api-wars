import React from 'react';

const DisplayUserName = ({ username }) => {
  return (
    <a>
      {username && username.length !== 0 ? `Signed in as : ${username}` : ''}
    </a>
  );
};

export default DisplayUserName;
