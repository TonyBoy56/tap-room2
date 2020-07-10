import React from "react";
import PropTypes from "prop-types";
import Keg from "./Keg";

function KegList(props) {
  return (
    <React.Fragment>
      <hr/>
      {Object.values(props.kegList).map((keg) => {
        return <Keg 
        whenKegClicked = { props.onKegSelection }
        name = {keg.name}
        brand = {keg.brand}
        price = {keg.price}
        abv = {keg.abv}
        quantity = {keg.quantity}
        id = {keg.id}
        key = {keg.id} />
      })}
    </React.Fragment>
  ); 
}

KegList.propTypes = {
  kegList: PropTypes.object,
  onKegSelection: PropTypes.func
};

export default KegList;