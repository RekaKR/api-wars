import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

function SingleIndexPHead() {
  return (
    <TableHead>
      <TableRow>
        <TableCell align="left">
          <strong>Name</strong>
        </TableCell>
        <TableCell align="left">
          <strong>Diameter</strong>
        </TableCell>
        <TableCell align="left">
          <strong>Climate</strong>
        </TableCell>
        <TableCell align="left">
          <strong>Terrain</strong>
        </TableCell>
        <TableCell align="left">
          <strong>Surface Water Percentage</strong>
        </TableCell>
        <TableCell align="left">
          <strong>Population</strong>
        </TableCell>
        <TableCell align="left">
          <strong>Residents</strong>
        </TableCell>
        <TableCell align="left"></TableCell>
      </TableRow>
    </TableHead>
  );
}

export default SingleIndexPHead;
