import React from 'react'
import { Button } from '../../Button'
import "./Product-Sass/ProductMain.css"

function Collection({ collectionTitle, productImg, productAlt, productName }) {
    return (
        <article className='product-content-container'>
            <div className={collectionTitle ? 'title' : 'title-none'}>
            </div>
            <article className='product-container'>
                <img src={productImg} alt={productAlt} className="img-product" />
                <Button className='product-btn-position' buttonStyle='btn-collection' buttonSize='btn-normal'>{productName}</Button>
            </article>
        </article>
    )
}

export default Collection