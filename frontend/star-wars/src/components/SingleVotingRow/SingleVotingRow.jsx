import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

function SingleVotingRow(props) {
  return (
    <>
      <TableRow>
        <TableCell component='th' scope='row'>
          {props.planet}
        </TableCell>
        <TableCell align='left'>{props.vote} </TableCell>
      </TableRow>
    </>
  );
}

export default SingleVotingRow;
