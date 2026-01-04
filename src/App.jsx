import React, { useEffect, useState } from 'react'

const App = () => {

  const [counter, setCounter] = useState(0)

  const [name, setName] = useState('')
  useEffect(()=>{
    console.log("hi")
  })

  return (
    <div>
      <input 
      type="text" 
      placeholder='enter name'
      value={name}
      onChange={(e)=>{
        setName(e.target.value)
      }}
      />

      <h1>{counter}</h1>
      <button onClick={()=>{
        setCounter(counter+1)
      }}>
        Increment Counter
      </button>
    </div>
  )
}

export default App