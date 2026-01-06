import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between p-2'>
      <h1>navbar</h1>
      <div className='flex gap-4 text-black p-2'>
        
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    </div>
  )
}

export default Navbar
