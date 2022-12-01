import React from 'react'
import craft from "./aboutAssets/pexels-antoni-shkraba-7166976.jpg"
import stars from "./aboutAssets/pexels-towfiqu-barbhuiya-9821386.jpg"
import appraise from "./aboutAssets/pexels-tima-miroshnichenko-6263064.jpg"
import "./About-Sass/About.css"
import { Button } from "../../Button"

function Blog() {
  return (
    <section className='blog-container'>
        <h2>Our Blog</h2>
        <article className='craft'>
            <h3>Discover Our Craftmanship</h3>
            <img src={craft} className="craft__img" alt="Photo by Antoni Shkraba: https://www.pexels.com/photo/woman-hammering-a-ring-7166976/"/>
            <Button> View Full Article</Button>
        </article>

        <article className='craft'>
            <h3>See Our Testimonials</h3>
            <img src={stars} className="craft__img" alt="Photo by Towfiqu barbhuiya: https://www.pexels.com/photo/five-yellow-stars-on-blue-and-pink-background-9821386/"/>
            <Button>View All</Button>
        </article>

        <article className='craft'>
            <h3>Jewelry Appraisal Process</h3>
            <img src={appraise} className="craft__img" alt="Photo by Tima Miroshnichenko: https://www.pexels.com/photo/person-holding-a-silver-bracelet-6263064/"/>
            <Button>Learn More</Button>
        </article>
    </section>
  )
}

export default Blog