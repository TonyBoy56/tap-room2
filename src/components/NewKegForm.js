import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";

function NewKegForm(props) {
  
  function handleNewKegFormSubmission(event) {
    event.preventDefault();

    props.onNewKegCreation({
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: event.target.price.value,
      abv: event.target.abv.value,
      wholeKeg: event.target.fullKeg.value,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      
    </React.Fragment>
  );
}