import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

function SingleIndexPHead() {
  const headerNames = ["Name", "Diameter", "Climate", "Terrain", "Surface Water Percentage", "Population", "Residents", ""]

  return (
    <TableHead>
      <TableRow>
        {headerNames.map(name => <TableCell align="left"><strong>{name}</strong></TableCell>)}
      </TableRow>
    </TableHead>
  );
}

export default SingleIndexPHead;
