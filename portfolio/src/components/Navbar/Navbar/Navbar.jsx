import React, { useRef, useState } from 'react'
import './Navbar.css'
import ameen from '../../../assets/AMEENn.png'
import underline from '../../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../../assets/menu_open.svg'
import menu_close from '../../../assets/menu_close.svg'

const Navbar = () => {


  const [menu,setMenu] = useState("home");
  const menuRef = useRef();

  const open_Menu = ()=> {
    menuRef.current.style.right="0";
  }
  const close_Menu = ()=> {
    menuRef.current.style.right="-850px";
  }

  return (
    <div className='Navbar'>
      <img src={ameen} alt="" />
      <img src={menu_open} onClick={open_Menu} alt=""  className='nav-mob-open' />

      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={close_Menu} alt="" className='nav-mob-close' />
        <li><AnchorLink className='anchor-link'href='#home' ><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu=="home"?<img src={underline} alt='' /> : <></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about' ><p onClick={()=>setMenu("about")}>About</p></AnchorLink>{menu=="about"?<img src={underline} alt='' /> : <></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#services' ><p onClick={()=>setMenu("services")}>Project</p></AnchorLink>{menu=="services"?<img src={underline} alt='' /> : <></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact' ><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu=="contact"?<img src={underline} alt='' /> : <></>}</li>
      </ul>


    <div className='nav-connect'><AnchorLink className='anchor-link' offset={50} href='#contact' >Connect Me</AnchorLink></div>

    </div>
  )
}

export default Navbar
