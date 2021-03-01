import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function IndexPage() {
  const classes = useStyles();

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/planets")
      .then((response) => response.json())
      .then((data) => setData(data.results));
  }, []);

  function separateNumber(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div className="starWarsTable">
      <h1>Star Wars universe planets</h1>
      <TableContainer component={Paper}>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Diameter</TableCell>
              <TableCell align="right">Climate</TableCell>
              <TableCell align="right">Terrain</TableCell>
              <TableCell align="right">Surface Water Percentage</TableCell>
              <TableCell align="right">Population</TableCell>
              <TableCell align="right">Residents</TableCell>
              <TableCell align="right">Vote</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{separateNumber(row.diameter)} km</TableCell>
                <TableCell align="right">{row.climate}</TableCell>
                <TableCell align="right">{row.terrain}</TableCell>
                <TableCell align="right">{row.surface_water === "unknown" ? "unknown" : `${row.surface_water}%`}</TableCell>
                <TableCell align="right">{row.population === "unknown" ? "unknown" : `${separateNumber(row.population)} people`}</TableCell>
                <TableCell align="right">
                  {row.residents.length === 0 ? "No known residents" : `${row.residents.length} resident(s)`}
                </TableCell>
                <TableCell align="right">Ide jön a Vote gomb.</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default IndexPage;
