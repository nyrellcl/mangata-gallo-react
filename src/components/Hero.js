import React from 'react';
import './pages/home/Hero-Sass/Hero.css';
import { Button } from './Button'
import { Link } from 'react-router-dom';


export default function Hero({
    lightBg,buttonLabel, lightText, lightTextDesc, description, headline, showButton
}) {
    return (
        <section className={lightBg ? 'hero-section' : 'hero-section darkBg'}>
            <article className='hero-content'>
                <h1 className={lightText ? 'heading' :'heading dark'}>{headline}</h1>
                <p className={lightTextDesc ? 'hero-subtitle': 'hero-subtitle dark'}>{description}</p>
                <Link to="/mangata-gallo-react/products">
                    <Button className={showButton ? 'displayButton': 'noButton'} buttonSize='btn-normal'>{buttonLabel}</Button>
                </Link>
            </article>
        </section>
    )
}
