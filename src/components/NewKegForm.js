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
      wholeKeg: event.target.wholeKeg.value,
      id: v4()
    })
  }

  return (
    <React.Fragment>
      <form onSubmit = {handleNewKegFormSubmission}>
        <input  
          type = 'text'
          name = 'name' 
          placeholder = 'Beer name' />
          <br></br>
        <input
          type = 'text'
          name = 'price'
          placeholder = 'Price' />
          <br></br>
        <input 
          type = 'text'
          name = 'abv'
          placeholder = 'ABV' />
          <br></br>
        <input
          type = 'text'
          name = 'wholeKeg'
          placeholder = 'Keg volume' />
          <br></br>
        <button type = 'submit'>Add new Keg</button>
      </form>
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;