import React,{useState} from "react";
import "./App.css";
import ListOfGifts from "./components/ListOfGifs/ListOfGifs";
import Input from "./components/Input/Input";
// import Button from "./components/Button/Button";

function App() {
  const [keyword, setKeyword] = useState('panda')

  return (
    <div className="App">
        <Input/>
        {/* <Button keyword={keyword} /> */}
        <button className="btn" onClick={()=>setKeyword('angel')}> Cambiar keyword</button>
        <ListOfGifts keyword={keyword}/>
    </div>
  );
}

export default App;
