import React, { useState } from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import VoteButton from "../VoteButton/VoteButton";
import ModalSingle from '../ModalSingle/ModalSingle';
import 'bootstrap/dist/css/bootstrap.min.css';

function separateNumber(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function SingleRow(props) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <TableRow key={props.row.name}>
        <TableCell component="th" scope="row">
          {props.row.name}
        </TableCell>
        <TableCell align="left">{separateNumber(props.row.diameter)} km</TableCell>
        <TableCell align="left">{props.row.climate}</TableCell>
        <TableCell align="left">{props.row.terrain}</TableCell>
        <TableCell align="left">{props.row.surface_water === "unknown" ? "unknown" : `${props.row.surface_water}%`}</TableCell>
        <TableCell align="left">
          {props.row.population === "unknown" ? "unknown" : `${separateNumber(props.row.population)} people`}
        </TableCell>
        <TableCell align="left">
          {props.row.residents.length === 0 ? "No known residents" : <button onClick={() => setModalShow(true)}>{props.row.residents.length} resident(s)</button>}
        </TableCell>
        <TableCell align="left"><VoteButton /></TableCell>
      </TableRow>

      <ModalSingle show={modalShow} onHide={() => setModalShow(false)} page={props.page} data={props.data} row={props.row} name={props.row.name} />
    </>
  );

}

export default SingleRow;
