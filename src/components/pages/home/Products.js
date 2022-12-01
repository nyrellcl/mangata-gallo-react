import React from 'react'
import "./Products-Sass/Products.css";
import { Button } from '../../Button';
import { Link } from 'react-router-dom'

function Products({ productName, productDesc, buttonLabel, pic, alt, productDirect, heading2 }) {
    return (
        <section className='products'>
            <h2 className={heading2 ? 'heading-display' : 'heading-display none'}>Our Collection</h2>
            <article className={productDirect ? 'product-container' : 'product-container reverse'}>
                <div className='product-container__content'>
                    <h3>{productName}</h3>
                    <p>{productDesc}</p>
                </div>
    
                <div className='product-container__secondary__content'>
                <img src={pic} alt={alt} className='product-img'/>
                <Link>
                    <Button buttonSize='btn-normal' buttonStyle='btn-secondary'>{buttonLabel}</Button>
                </Link>

                </div>

            </article>
        </section>
    )
}

export default Products;
