import React from "react";
import Header from "./Header";
import KegList from "./KegList";

import './App.css';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Header />
        <KegList />
      </React.Fragment>
    </div>
  );
}

export default App;