import React from "react";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import NewKegForm from "./NewKegForm";
import KegList from "./KegList";
import KegDetail from "./KegDetail";

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      formVisibleOnPage: false,
      selectedKeg: null,
      quantity: 124
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.props.masterKegList[id];
    this.setState({selectedKeg: selectedKeg});
  }

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const { name, brand, price, abv, quantity, id } = newKeg;
    const action = {
      type: 'ADD_KEG',
      name: name,
      brand: brand,
      price: price,
      abv: abv,
      quantity: quantity,
      id: id,
    }
    dispatch(action);
    this.setState({formVisibleOnPage: false});
  }

  handleSaleOfPint = (id) => {
    const newKegSelection = this.state.masterKegList.filter((keg) => keg.id == id)[0];
    if(newKegSelection.quantity === 0) {
      alert("No more juice man! Try a different keg.")
    } else {
      const decrementPint = newKegSelection.quantity -1;
      const sellPint = {...newKegSelection, quantity: decrementPint}
      const soldPint = this.state.masterKegList.filter((keg) => keg.id !== id);
      this.setState({
        masterKegList: [...soldPint, sellPint],
        selectedKeg: sellPint
      })
    }
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetail 
        keg = {this.state.selectedKeg} 
        uponSale = {this.handleSaleOfPint} />;
      buttonText = "Return to Keg List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm 
        onNewKegCreation = {this.handleAddingNewKegToList} />;
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = <KegList 
        kegList = {this.state.masterKegList}
        onKegSelection = {this.handleChangingSelectedKeg} />;
      buttonText = "Add Keg";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick = {this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

KegControl.propTypes = {
  masterKegList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterKegList: state.masterKegList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

KegControl = connect(mapStateToProps)(KegControl);
export default KegControl;