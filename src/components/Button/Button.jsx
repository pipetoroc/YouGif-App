import React from 'react'
import { useState } from 'react'
import './Button.css'

function Button() {
  const [keyword, setKeyword] = useState('panda')

  return (
    <button className="btn" onClick={()=>setKeyword('angel')}> Cambiar keyword</button>
    )
}

export default Button