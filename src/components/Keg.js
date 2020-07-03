import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <h3>{props.name} - {props.brand}</h3>
        <h5>{props.price}</h5>
        <h5>{props.abv}</h5>
        <h5>{props.wholeKeg} pints</h5>
      </div>
      <hr/>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  abv: PropTypes.string.isRequired,
  wholeKeg: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
}

export default Keg;