/*import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import SingleModalRow from '../SingleModalRow/SingleModalRow';


import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
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
        <Modal.Title id="contained-modal-title-vcenter">
          Residents of vmi
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">



        <TableContainer component={Paper}>
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell align="left">
                  <strong>Első</strong>
                </TableCell>

                <TableCell align="left">
                  <strong>Második</strong>
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {props.data.map((row) => (
                <SingleModalRow key={uuidv4()} row={row} />
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

export default ModalSingle;*/