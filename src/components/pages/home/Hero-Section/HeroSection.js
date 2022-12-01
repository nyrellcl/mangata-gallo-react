import React from 'react'
import Hero from '../../../Hero'
import { homeObjOne } from '../../../Data'
import ProductPage from '../Product-Page/ProductPage';
import Form from '../Form';


export default function HeroSection() {
  return (
    <>
      <Hero {...homeObjOne} />
      <ProductPage />
      <Form />
    </>
  )
}


