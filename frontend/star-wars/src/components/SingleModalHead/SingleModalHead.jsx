import React from "react";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { v4 as uuidv4 } from 'uuid';

function SingleModalHead(props) {
  const headerNames = ["Name", "Height", "Mass", "Hair color", "Skin color", "Eye color", "Birth year", "Gender"]

  return (
    <TableHead colSpan={6} style={{ display: `${props.isShown ? "none" : "block"}` }}>
      <TableRow>
        {headerNames.map(name => <TableCell key={uuidv4()} align="right"><strong>{name}</strong></TableCell>)}
      </TableRow>
    </TableHead >
  );
}

export default SingleModalHead;
