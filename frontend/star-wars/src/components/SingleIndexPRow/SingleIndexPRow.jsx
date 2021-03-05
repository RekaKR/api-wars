import React, { useState } from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import VoteButton from '../VoteButton/VoteButton';
import ModalSingle from '../ModalSingle/ModalSingle';
import Button from '@material-ui/core/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function separateNumber(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function SingleRow({ row, resi, showVote }) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <TableRow>
        <TableCell component='th' scope='row'>{row.name}</TableCell>
        <TableCell align='left'>{separateNumber(row.diameter)} km</TableCell>
        <TableCell align='left'>{row.climate}</TableCell>
        <TableCell align='left'>{row.terrain}</TableCell>
        <TableCell align='left'>{row.surface_water === 'unknown' ? 'unknown' : `${row.surface_water}%`}</TableCell>
        <TableCell align='left'>{row.population === 'unknown' ? 'unknown' : `${separateNumber(row.population)} people`}</TableCell>
        <TableCell align='left'>
          {row.residents.length === 0 ? ('No known residents')
            : (<Button onClick={() => setModalShow(true)} variant='contained' color='primary'>
              {row.residents.length} resident(s)
            </Button>)}
        </TableCell>
        <TableCell align='left'>{showVote ? <VoteButton name={row.name} /> : ''}</TableCell>
      </TableRow>

      {modalShow ?
        (<ModalSingle show={modalShow} onHide={() => setModalShow(false)} name={row.name} resi={resi} />) : ('')}
    </>
  );
}

export default SingleRow;
