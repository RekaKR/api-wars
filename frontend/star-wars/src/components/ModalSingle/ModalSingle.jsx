import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import SingleModalHead from '../SingleModalHead/SingleModalHead';
import SingleModalRow from '../SingleModalRow/SingleModalRow';
import { makeStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import { v4 as uuidv4 } from 'uuid';

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

function ModalSingle(props) {
  const [people, setPeople] = useState([]);
  const [isShown, setIsShown] = useState(false);

  const classes = useStyles();

  useEffect(() => {
    setIsShown(true);

    props.resi.map((item) => {
      fetch(item)
        .then((response) => response.json())
        .then((data) => {
          setIsShown(false);
          setPeople((prevState) => [...prevState, data]);
        });
    });
  }, []);

  return (
    <Modal {...props} size='lg' aria-labelledby='contained-modal-title-vcenter'>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Residents of {props.name}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className='show-grid'>
        <SingleModalHead isShown={isShown} />

        <div id='load-animation' style={{ display: `${isShown ? 'flex' : 'none'}` }}></div>

        <TableContainer component={Paper}>
          <Table className={classes.table} size='small' aria-label='a dense table'>
            <TableBody>
              {people.map((person) => (
                <SingleModalRow key={uuidv4()} row={person} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalSingle;
