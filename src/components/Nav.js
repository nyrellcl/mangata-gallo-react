import './Nav-Sass/Nav.css'
import React, { useState } from 'react'
import logo from './assets/Asset 2@3x.png'
import { FaBars, FaTimes } from 'react-icons/fa'
import { BsCart, BsCartFill } from "react-icons/bs"
import { Link } from 'react-router-dom'

const logoStyle = {
    width: "163px",
    height: "18px",
}

function Nav() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)


    const image = <img style={logoStyle} src={logo} alt="" onClick={closeMobileMenu} />
    return (
        <header className='header-bar'>
            <nav className='menu-icon' onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
            </nav>
            <Link to="/">{image}</Link>
            <nav className='shopping-icon-mobile'>
                <BsCart/>
                {/*{click ? <BsCartFill/> : <BsCart/> }*/}
            </nav>
            <ul className={click ? 'nav-list active' : 'nav-list'}>
                <li><Link to="/mangata-gallo-react/" onClick={closeMobileMenu}>Home</Link></li>
                <li><Link to="/mangata-gallo-react/about" onClick={closeMobileMenu}>About</Link></li>
                <li><Link to="/mangata-gallo-react/products" onClick={closeMobileMenu}>Products</Link></li>
                <li className='shopping-icon-tablet-desktop'><BsCart/></li>
            </ul>
        </header>
    )
}

export default Nav;



