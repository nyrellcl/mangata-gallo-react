import './App.css';
import React from 'react'
import Nav from './components/Nav';
//import { Route, Routes } from 'react-router-dom'
import HeroSection from './components/Hero-Section/HeroSection';
import Footer from "./components/Footer"
import ProductPage from './components/Product-Page/ProductPage';
import Form from './components/Form';

function App() {
  return (
    <>
      <Nav first="Home"
        second="About"
        third="Products" />
        <HeroSection />
      {/*<Routes>
        <Route path="/" component={} />
  </Routes>*/}
      <ProductPage />
      <Form />
      <Footer />
    </>
      
        
       
  );
}

export default App;
