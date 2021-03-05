import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import male from '../../style/Gender/male.svg'
import female from '../../style/Gender/female.svg'

function ModalSingleRow({ row }) {
  return (
    <>
      <TableRow key={row.name}>
        <TableCell component="th" scope="row">{row.name}</TableCell>
        <TableCell align="left">{row.height / 100} m</TableCell>
        <TableCell align="left">{row.mass === "unknown" ? "unknown" : `${row.mass}kg`}</TableCell>
        <TableCell align="left">{row.hair_color === "n/a" ? "unknown" : row.hair_color}</TableCell>
        <TableCell align="left">{row.skin_color}</TableCell>
        <TableCell align="left">{row.eye_color}</TableCell>
        <TableCell align="left">{row.birth_year}</TableCell>
        <TableCell align="center">{row.gender === "n/a" ? "unknown" : (row.gender === "male" ?
          <img id="male" src={male} alt="male" /> :
          <img id="female" src={female} alt="female" />)}
        </TableCell>
      </TableRow>
    </>
  );
};

export default ModalSingleRow;