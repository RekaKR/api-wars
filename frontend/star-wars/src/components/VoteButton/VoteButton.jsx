import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';

const VoteButton = (props) => {
  const vote = () => {
    console.log('dqsd');
    axios({
      method: 'POST',
      data: {
        planetName: props.name,
      },
      withCredentials: true,
      url: 'http://localhost:8000/vote',
    }).then((res) => alert(res.data));
  };

  return (
    <Button onClick={vote} variant='contained' color='primary'>
      Vote {props.name}
    </Button>
  );
};

export default VoteButton;
