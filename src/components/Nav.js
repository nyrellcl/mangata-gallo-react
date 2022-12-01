import './Nav-Sass/Nav.css'
import React, { useState } from 'react'
import logo from './assets/Asset 2@3x.png'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const logoStyle ={
    width: "163px",
    height: "18px",
}

function Nav() {
    const [click, setClick] = useState(false)
    const handleClick = ()=> setClick(!click)
    const closeMobileMenu = ()=> setClick(false)
    
    
    const image = <img style={logoStyle} src={logo} alt="" onClick={closeMobileMenu}/>
    return (
        <header className='header-bar'>
            <a href='/' style={{zIndex: 10}}>{image}</a>
            <nav className='menu-icon' onClick={handleClick}>
                {click ? <FaTimes/>: <FaBars/>}
            </nav>
                <ul className={click ? 'nav-list active': 'nav-list'}>
                    <li><Link to="/home" onClick={closeMobileMenu}>Home</Link></li>
                    <li><Link to="/about" onClick={closeMobileMenu}>About</Link></li>
                    <li><Link to="/products" onClick={closeMobileMenu}>Products</Link></li>
                </ul>
        </header>
    )
}

export default Nav;



