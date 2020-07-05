import React from "react";
import Header from "./Header";
import KegControl from "./KegControl"
// import KegList from "./KegList";

function App() {
  return (
    <React.Fragment>
      <Header />
      <KegControl />
      {/* <KegList /> */}
    </React.Fragment>
  );
}

export default App;