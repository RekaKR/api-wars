import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import SingleRow from "./SingleRow";
import { v4 as uuidv4 } from "uuid";
import "./IndexPage.css";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function IndexPage() {
  const classes = useStyles();

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://swapi.dev/api/planets/?page=${page}`)
      .then((response) => response.json())
      .then((data) => setData(data.results));
  }, [page]);

  return (
    <div className="starWarsTable">
      <h1>Star Wars universe planets</h1>
      <div className="buttons">
        <Button className="previous" onClick={() => (page > 1 ? setPage(page - 1) : setPage(1))} className="previous" variant="contained" color="primary">
          Previous
        </Button>

        <Button onClick={() => (page < 6 ? setPage(page + 1) : setPage(6))} className="next" variant="contained" color="primary">
          Next
        </Button>
      </div>

      <TableContainer component={Paper}>
        <Table className={classes.table} size="small" aria-label="a dense table">
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
          <TableBody>
            {data.map((row) => (
              <SingleRow key={uuidv4()} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default IndexPage;
