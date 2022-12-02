import './App.css';
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HeroSection from './components/pages/home/Hero-Section/HeroSection';
import Footer from "./components/Footer"
import About from './components/pages/about/About'
import Nav from "./components/Nav";
import ProductMain from './components/pages/products/ProductMain';

function App() {
  return (
    <BrowserRouter>
      <>
        <Nav />
        <Routes>
          <Route path="/" exact element={<HeroSection />} />
          <Route path='/about' element={<About />} />
          <Route path="/products" element={<ProductMain />} />
        </Routes>
        <Footer />
      </>
    </BrowserRouter>




  );
}

export default App;
