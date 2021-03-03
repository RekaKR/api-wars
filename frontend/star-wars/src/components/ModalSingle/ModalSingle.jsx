import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import SingleModalHead from '../SingleModalHead/SingleModalHead';
import SingleModalRow from '../SingleModalRow/SingleModalRow';
import ModalSingleRow from '../ModalSingleRow/ModalSingleRow';

import TableBody from "@material-ui/core/TableBody";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import { v4 as uuidv4 } from "uuid";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


function ModalSingle(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Residents of vmi</Modal.Title>
      </Modal.Header>

      <Modal.Body className="show-grid">
        <SingleModalHead />

        <TableContainer component={Paper}>
          <Table size="small" aria-label="a dense table">
            {/*<TableBody>
              {props.data.map((row) => (
                <ModalSingleRow key={uuidv4()} row={row} />
              ))}
            </TableBody>*/}
          </Table>
        </TableContainer>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal >
  );
}

export default ModalSingle;