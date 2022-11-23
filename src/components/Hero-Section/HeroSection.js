import React from 'react'
import Hero from '../Hero'
import { homeObjOne} from '../Data'


export default function HeroSection() {
  return (
    <>
    <Hero {...homeObjOne} />
    </>
  )
}


