import React from 'react'
import './Navbar.css'
import ameen from '../../../assets/AMEENn.png'

const Navbar = () => {
  return (
    <div className='Navbar'>
      <img src={ameen} alt="" />
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
