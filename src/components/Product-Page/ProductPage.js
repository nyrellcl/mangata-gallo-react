import React from 'react'
import { productObjOne, productObjTwo, productObjThree } from '../Data'
import Products from "../Products"
import "../assets/pexels-pixabay-266621.jpg"

export default function ProductPage() {
    return (
        <>
        <Products {...productObjOne} img="../assets/pexels-pixabay-266621.jpg"/>
        <Products {...productObjTwo} />
        <Products {...productObjThree}/>
        </>
    )
}
