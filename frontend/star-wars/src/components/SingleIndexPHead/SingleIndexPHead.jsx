import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { v4 as uuidv4 } from 'uuid';

function SingleIndexPHead() {
  const headerNames = ["Name", "Diameter", "Climate", "Terrain", "Surface Water Percentage", "Population", "Residents", ""]

  return (
    <TableHead>
      <TableRow>
        {headerNames.map(name => <TableCell key={uuidv4()} align="left"><strong>{name}</strong></TableCell>)}
      </TableRow>
    </TableHead>
  );
}

export default SingleIndexPHead;
