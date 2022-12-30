import React from "react";
import "./App.css";
import ListOfGifts from "./components/ListOfGifs/ListOfGifs";
// import Button from "./components/Button/Button";
import { Link, Route } from "wouter";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>Aplicacion de gifs</h1>
        <div>
          <Link to="/gif/colombia"> Gifs de Colombia</Link>
          <Link to="/gif/brasil"> Gifs de brasil</Link>
          <Link to="/gif/laura"> Gifs de laura</Link>
          <Link to="/gif/felipe"> Gifs de felipe</Link>
        </div>

        <Route
          component={ListOfGifts}
          path="/gif/:keyword"
        />
      </section>
    </div>
  );
}

export default App;
