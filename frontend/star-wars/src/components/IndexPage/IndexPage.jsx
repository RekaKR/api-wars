import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import { v4 as uuidv4 } from 'uuid';
import Buttons from '../Buttons/Buttons';
import SingleIndexPHead from '../SingleIndexPHead/SingleIndexPHead';
import SingleIndexPRow from '../SingleIndexPRow/SingleIndexPRow';
import '../../style/CSS/IndexPage/IndexPage.css';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function IndexPage(props) {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isShown, setIsShown] = useState(false);
  const rootE = document.getElementById('root');

  useEffect(() => {
    if (page >= 1) {
      rootE.style.opacity = '0.7';
      setIsShown(true);

      fetch(`https://swapi.dev/api/planets/?page=${page}`)
        .then((response) => response.json())
        .then((data) => {
          rootE.style.opacity = '1';
          setIsShown(false);
          setData(data.results);
        });
    }
  }, [page]);

  return (
    <div className='starWarsTable'>
      <h1>Star Wars universe planets</h1>
      <Buttons
        clickNext={() => (page < 6 ? setPage(page + 1) : setPage(6))}
        clickPrev={() => (page > 1 ? setPage(page - 1) : setPage(1))}
        page={page} />

      <div id='load-animation' style={{ display: `${isShown ? 'flex' : 'none'}` }}></div>

      <TableContainer component={Paper}>
        <Table className={classes.table} size='small' aria-label='a dense table'>
          <SingleIndexPHead />

          <TableBody>
            {data.map((row) => (
              <SingleIndexPRow key={uuidv4()} row={row} data={data} resi={row.residents} showVote={props.username} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default IndexPage;
