import React, { useState } from 'react'
import './Navbar.css'
import ameen from '../../../assets/AMEENn.png'
import underline from '../../../assets/nav_underline.svg'

const Navbar = () => {


  const [menu,setMenu] = useState("services");


  return (
    <div className='Navbar'>
      <img src={ameen} alt="" />
      <ul className="nav-menu">
        <li><p onClick={()=>setMenu("home")}>Home</p>{menu=="home"?<img src={underline} alt='' /> : <></>}</li>
        <li><p onClick={()=>setMenu("about")}>About</p>{menu=="about"?<img src={underline} alt='' /> : <></>}</li>
        <li><p onClick={()=>setMenu("services")}>Services</p>{menu=="services"?<img src={underline} alt='' /> : <></>}</li>
        <li><p onClick={()=>setMenu("work")}>Portfolio</p>{menu=="work"?<img src={underline} alt='' /> : <></>}</li>
        <li><p onClick={()=>setMenu("contact")}>Contact</p>{menu=="contact"?<img src={underline} alt='' /> : <></>}</li>
      </ul>


    <div className='nav-connect'>Connect Me</div>

    </div>
  )
}

export default Navbar
