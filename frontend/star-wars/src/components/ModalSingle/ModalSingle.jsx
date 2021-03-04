import React, { useState, useEffect } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import SingleModalHead from '../SingleModalHead/SingleModalHead';
import SingleModalRow from '../SingleModalRow/SingleModalRow';

import TableBody from "@material-ui/core/TableBody";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import { v4 as uuidv4 } from "uuid";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


function ModalSingle(props) {
  const [people, setPeople] = useState([]);
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    if (props.page >= 1) {
      setIsShown(true);

      fetch(`https://swapi.dev/api/people/?page=${props.page}`)
        .then((response) => response.json())
        .then((data) => {
          setIsShown(false);
          setPeople(data.results);
        });

      //people.map((person) => console.log(person.homeworld));
      //let resident = (props.row.residents).map(result => result);
      //console.log(resident.includes("http://swapi.dev/api/people/3/"))

      //console.log(people.map((person) => resident.includes(person.homeworld)))
    }
  }, [props.page]);

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Residents of {props.name}</Modal.Title>
      </Modal.Header>

      <Modal.Body className="show-grid">
        <SingleModalHead isShown={isShown} />

        <div id="load-animation" style={{ display: `${isShown ? "flex" : "none"}` }}></div>

        <TableContainer component={Paper}>
          <Table size="small" aria-label="a dense table">
            <TableBody>
              {people.map((person) => (
                ((props.row.residents).includes("http://swapi.dev/api/people/3/")) ? <SingleModalRow key={uuidv4()} row={person} /> : ""))}
            </TableBody>
          </Table>
        </TableContainer>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal >
  );
}

export default ModalSingle;

//<SingleModalRow key={uuidv4()} row={person} />
//(props.row.residents).map(result => console.log(result))
//console.log(person.homeworld)
//console.log(props.data[0].residents.includes(person.homeworld) ? "jaja" : "nemnem")

/*{people.map((person) => (
<SingleModalRow key={uuidv4()} row={person} />
  ))}*/