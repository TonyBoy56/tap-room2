import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {
  const { keg, uponSale } = props;

  return (
    <React.Fragment>
      <h1>Keg Details</h1>
      <h3>{keg.name} - {keg.brand}</h3>
      <h5>${keg.price} /pint</h5>
      <h5>{keg.abv}% ABV</h5>
      <h5>Quantity: {keg.quantity} pints</h5>
      <button onClick = {() => uponSale(keg.id)}>Have a Pint!</button>
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  uponSale: PropTypes.func
};

export default KegDetail;