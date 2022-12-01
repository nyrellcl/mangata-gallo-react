import React from 'react'
//import { Link } from 'react-router-dom'
import "./Footer-Sass/Footer.css"
import logo from "./assets/Asset 3@3x.png"



function Footer() {
    return (
        <footer className='footer-container'>
            <div className='footer-container__socials'>
                <div className='logo-container'>
                    <a href='/'><img src={logo} height="43px" alt="" className='footer-container__socials__logo' /></a>
                </div>

                <ul className='footer-container__socials__list'>
                    <li><a href='/'><i className='fa-brands fa-facebook-square fa-2xl'></i></a></li>
                    <li><a href='/'><i className='fa-brands fa-square-twitter fa-2xl'></i></a></li>
                    <li><a href='/'><i className='fa-brands fa-square-instagram fa-2xl'></i></a></li>
                </ul>

            </div>
            <nav className='footer-nav__container'>
                <div className='footer-nav__container__about'>
                    <h5>About</h5>
                    <ul className='footer-nav__container__about__list'>
                        <li><a href='/'>Blog</a></li>
                        <li><a href='/'>Who We Are</a></li>
                        <li><a href='/'>Contact Us</a></li>
                    </ul>
                </div>
                <div className='footer-nav__container__products'>
                    <h5>Products</h5>
                    <ul className='footer-nav__container__products__list'>
                        <li><a href='/'>Hand Jewelry</a></li>
                        <li><a href='/'>Earrings</a></li>
                        <li><a href='/'>Necklaces</a></li>
                    </ul>
                </div>
            </nav>
            <div className='rights'>
            <small>Copyright Mangata and Gallo 2022</small>

            </div>
        </footer>
    )
}

export default Footer