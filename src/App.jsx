import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import { getGifts } from './services/get-gifs'


function App() {
  const [gifts, setGifts] = useState([])

  useEffect (function (){
    getGifts().then(gifts => setGifts(gifts))
  }, [])

  return (
    <div className="App">
      {
        gifts.map(singleGifts => <img src={singleGifts} />)
      }
    </div>
  )
}

export default App
