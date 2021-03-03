import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

function ModalSingleRow(props) {
  return (
    <>
      <TableRow key={props.row.name}>
        <TableCell component="th" scope="row">{props.row.name}</TableCell>
        <TableCell align="left">{props.row.height / 100} m</TableCell>
        <TableCell align="left">{props.row.mass}</TableCell>
        <TableCell align="left">{props.row.hair_color}</TableCell>
        <TableCell align="left">{props.row.skin_color === "unknown" ? "unknown" : `${props.row.skin_color} LBABLALBLALBLA`}</TableCell>
        <TableCell align="left">{props.row.eye_color === "unknown" ? "unknown" : `${props.row.eye_color} people`}</TableCell>
        <TableCell align="left">{props.row.birth_year === "unknown" ? "unknown" : `${props.row.birth_year} people`}</TableCell>
        <TableCell align="left">{props.row.gender === "unknown" ? "unknown" : `${props.row.gender} people`}</TableCell>
      </TableRow>
    </>
  );
};

export default ModalSingleRow;