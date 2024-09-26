import React, { useState } from 'react'
import './Navbar.css'
import ameen from '../../../assets/AMEENn.png'
import underline from '../../../assets/nav_underline.svg'

const Navbar = () => {


  const [menu,setMenu] = useState("work");


  return (
    <div className='Navbar'>
      <img src={ameen} alt="" />
      <ul className="nav-menu">
        <li><p>Home</p>{menu=="home"?<img src={underline} alt='' /> : <></>}</li>
        <li><p>About</p>{menu=="about"?<img src={underline} alt='' /> : <></>}</li>
        <li><p>Services</p>{menu=="services"?<img src={underline} alt='' /> : <></>}</li>
        <li><p>Portfolio</p>{menu=="work"?<img src={underline} alt='' /> : <></>}</li>
        <li><p>Contact</p>{menu=="contact"?<img src={underline} alt='' /> : <></>}</li>
      </ul>


    <div className='nav-connect'>Connect Me</div>

    </div>
  )
}

export default Navbar
