import React, {useState} from "react";
import "./App.css";
import ListOfGifts from "./components/ListOfGifs";

function App() {
  const [keyword, setKeyWord] = useState('amor')

  return (
    <div className="App">
      <button onClick={()=>setKeyWord('angel')}> Cambiar keyword</button>
      <ListOfGifts keyword={keyword}/>
    </div>
  );
}

export default App;
