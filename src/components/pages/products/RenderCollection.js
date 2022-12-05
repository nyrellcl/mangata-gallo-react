import React from 'react'
import { collectionOne, collectionTwo, collectionThree, collectionFour } from '../../Data'
import Collection from './Collection'
import "./Product-Sass/ProductMain.css"

function RenderCollection() {
    return (
        <>
        <section className='collection-title'>
            <h1>Our Collection</h1>
            <h2>Explore our collection and find the piece that will fit perfectly for you</h2>
        </section>
        <hr/>
        <section className='collection-container'>
                <Collection {...collectionOne} />
                <Collection {...collectionTwo} />
                <Collection {...collectionThree} />
                <Collection {...collectionFour} />
            </section></>


    )
}

export default RenderCollection