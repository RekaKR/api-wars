import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import SingleVotingRow from '../SingleVotingRow/SingleVotingRow';
import { v4 as uuidv4 } from 'uuid';

const Voting = () => {
  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);

  const [modalShow, setModalShow] = useState(true);
  const [data, setData] = useState({});
  useEffect(() => {
    axios({
      method: 'GET',
      withCredentials: true,
      url: 'http://localhost:8000/vote',
    }).then((res) => setData(res.data));
  }, []);

  let voteArr = [];
  for (const m in data) {
    voteArr.push({ [m]: data[m] });
  }
  console.log(voteArr);
  return (
    <Modal
      show={modalShow}
      onHide={handleClose}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Voting Statistic
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className='show-grid'>
        <TableHead>
          <TableRow>
            <TableCell align='left' style={{ width: '83%' }}>
              <strong>Planet name</strong>
            </TableCell>
            <TableCell align='left'>
              <strong>Vote count</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableContainer component={Paper}>
          <Table size='small' aria-label='a dense table'>
            {voteArr.map((vote) => (
              <SingleVotingRow
                planet={Object.keys(vote)}
                vote={Object.values(vote)}
                key={uuidv4()}
              />
            ))}
          </Table>
        </TableContainer>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={() => handleClose()}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Voting;
