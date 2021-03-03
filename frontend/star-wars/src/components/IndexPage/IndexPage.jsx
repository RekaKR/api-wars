import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import SingleRow from "../SingleIndexPRow/SingleIndexPRow";
import { v4 as uuidv4 } from "uuid";
import "../../style/CSS/IndexPage/IndexPage.css";
import Buttons from "../Buttons/Buttons";
import SingleIndexPHead from "../SingleIndexPHead/SingleIndexPHead";

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
      <Buttons clickNext={() => (page < 6 ? setPage(page + 1) : setPage(6))}
        clickPrev={() => (page > 1 ? setPage(page - 1) : setPage(1))} page={page} />

      <TableContainer component={Paper}>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <SingleIndexPHead />

          <TableBody>
            {data.map((row) => (
              <SingleRow key={uuidv4()} row={row} data={data} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default IndexPage;
