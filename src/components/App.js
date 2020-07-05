import React from "react";
import Header from "./Header";
import KegList from "./KegList";

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