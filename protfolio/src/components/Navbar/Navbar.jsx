import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='Navbar'>
      <img src="{logo}" alt="" />

      <ul className="nav-menu">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>


    <div className='nav-connect'>Connect Me</div>

    </div>
  )
}

export default Navbar
