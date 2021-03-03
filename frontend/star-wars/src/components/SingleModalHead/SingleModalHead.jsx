import React from "react";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

function SingleModalHead() {
  return (
    <TableHead>
      <TableRow>
        <TableCell align="left">
          <strong>Name</strong>
        </TableCell>
        <TableCell align="left">
          <strong>Height</strong>
        </TableCell>
        <TableCell align="left">
          <strong>Mass</strong>
        </TableCell>
        <TableCell align="left">
          <strong>Hair color</strong>
        </TableCell>
        <TableCell align="left">
          <strong>Skin color</strong>
        </TableCell>
        <TableCell align="left">
          <strong>Eye color</strong>
        </TableCell>
        <TableCell align="left">
          <strong>Birth year</strong>
        </TableCell>
        <TableCell align="left">
          <strong>Gender</strong>
        </TableCell>
      </TableRow>
    </TableHead>
  );
}

export default SingleModalHead;
