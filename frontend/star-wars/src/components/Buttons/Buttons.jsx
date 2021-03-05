import React from "react";
import Button from "@material-ui/core/Button";

function Buttons(props) {
  return (
    <div className="buttons">
      <Button onClick={props.clickPrev} disabled={props.page === 1 ? true : false}
        className="previous" variant="contained" color="primary">Previous</Button>

      <Button onClick={props.clickNext} disabled={props.page === 6 ? true : false}
        className="next" variant="contained" color="primary">Next</Button>
    </div>
  );
}

export default Buttons;
