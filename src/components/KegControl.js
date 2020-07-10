import React from "react";
import NewKegForm from "./NewKegForm";
import KegList from "./KegList";
import KegDetail from "./KegDetail";

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterKegList: [],
      selectedKegList: [],
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
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({
      masterKegList: newMasterKegList,
      formVisibleOnPage: false,
    });
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

export default KegControl;