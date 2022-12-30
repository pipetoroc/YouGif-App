import React from "react";
import "./App.css";
import Home from "/src/pages/Home/index"
import SearchResult from "./pages/SearchResult/SearchResult"
import Detail from "/src/pages/Detail/Detail"

import { Route } from "wouter";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>Aplicacion de gifs</h1>

        <Route
          component={Home}
          path='/'
        />
        <Route
          component={SearchResult}
          path='/search/:keyword'
        />
        <Route
          component={Detail}
          path='/search/:id'
        />
      </section>
    </div>
  );
}

export default App;
