import React, { Fragment } from "react";
import "./Checkbox.scss";
const Checkbox = (props) => {

    const style = {
        marginLeft: props.ml ?? props.ml,
    }

    const checked = props.isChecked ? true: false;

  return (

    <Fragment>
      <label className="checkboxcontainer" style={style}>
        <input type="checkbox" checked={checked} onChange={props.click} />
        <span className="checkmark"></span>
      </label>
    </Fragment>
  );
};

export default Checkbox;
