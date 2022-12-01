import './App.css';
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HeroSection from './components/pages/home/Hero-Section/HeroSection';
import Footer from "./components/Footer"
import About from './components/pages/about/About'
import Nav from "./components/Nav";
import ProductMain from './components/pages/products/ProductMain';

function App() {
  return (
    <>
      <Routes>
      <Nav />
        <Route path="/home" element={<HeroSection />} />
        <Route path='/about' element={<About />} />
        <Route path="/products" element={<ProductMain />} />
      <Footer />
      </Routes>
    </>



  );
}

export default App;
