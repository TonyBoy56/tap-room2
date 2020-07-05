import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit = {props.formSubmissionHandler}>
        <input  
          type = 'text'
          name = 'name' 
          placeholder = 'Beer name' />
        <input
          type = 'text'
          name = 'price'
          placeholder = 'Price' />
        <input 
          type = 'text'
          name = 'abv'
          placeholder = 'ABV' />
        <input
          type = 'text'
          name = 'wholeKeg'
          placeholder = 'Keg volume' />
        <button type = 'submit'>Add new Keg</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;