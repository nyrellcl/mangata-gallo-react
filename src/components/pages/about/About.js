import React from 'react';
import AboutProduct from './AboutProduct';
import Blog from './Blog';

function About() {
  return (
    <>
    <section className='about-intro'>
        <article className='about-intro__container'>
            <div className='about-intro__container__content'>
                <h1>Mangata and Gallo</h1>
                <p>an elegant and creative collection of jewelry. Mangata and Gallo jewelry is defined by its natural forms and features. We aim to establish luxury with comfortability through our diligent craftmanship coupled with detailed attention to how our jewelry fits our clients. </p>
            </div>
        </article>
    </section>
    <AboutProduct/>
    <Blog/>
    </>
  )
}

export default About