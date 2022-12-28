import React from "react";
import "./App.css";
import ListOfGifts from "./components/ListOfGifs/ListOfGifs";
// import Button from "./components/Button/Button";

function App() {

  return (
    <div className="App">
      {/* <button
        className="btn"
        onClick={() => setKeyword("colombia")}>
        Cambiar keyword
      </button> */}
      <section className="App-content">
        <ListOfGifts keyword='panda' />
      </section>
    </div>
  );
}

export default App;