import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext'

const Navbar = ({ theme, setTheme }) => {

  const [inputValue, setInputValue] = useState('')

  const data = useContext(UserDataContext)

  return (
    <div className='flex justify-center items-center gap-4 p-2'>
      <h1>theme is {theme} {data}</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          setTheme(inputValue) 
          setInputValue('') 
        }}
      >
        <input
          type="text"
          placeholder="enter color"
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
        />

        <button type="submit">submit</button>
      </form>

      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </div>
  )
}

export default Navbar
