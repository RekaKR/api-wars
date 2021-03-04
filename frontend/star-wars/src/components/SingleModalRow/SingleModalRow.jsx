import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import male from '../Gender/male.svg'
import female from '../Gender/female.svg'

function ModalSingleRow(props) {
  return (
    <>
      <TableRow key={props.row.name}>
        <TableCell component="th" scope="row">{props.row.name}</TableCell>
        <TableCell align="left">{props.row.height / 100} m</TableCell>
        <TableCell align="left">{props.row.mass === "unknown" ? "unknown" : `${props.row.mass}kg`}</TableCell>
        <TableCell align="left">{props.row.hair_color === "n/a" ? "unknown" : props.row.hair_color}</TableCell>
        <TableCell align="left">{props.row.skin_color}</TableCell>
        <TableCell align="left">{props.row.eye_color}</TableCell>
        <TableCell align="left">{props.row.birth_year}</TableCell>
        <TableCell align="center">{props.row.gender === "n/a" ? "unknown" : (props.row.gender === "male" ?
          <img id="male" src={male} alt="male" /> :
          <img id="female" src={female} alt="female" />)}
        </TableCell>
      </TableRow>
    </>
  );
};

export default ModalSingleRow;