import React from 'react'
import { productObjOne, productObjTwo, productObjThree } from '../Data'
import Products from "../Products"


export default function ProductPage() {
    return (
        <>
        <Products {...productObjOne} />
        <Products {...productObjTwo} />
        <Products {...productObjThree}/>
        </>
    )
}
