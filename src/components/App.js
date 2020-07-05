import React from "react";
import Header from "./Header";
import KegControl from "./KegControl"
// import KegList from "./KegList";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Header />
        <KegControl />
        {/* <KegList /> */}
      </React.Fragment>
    </div>
  );
}

export default App;