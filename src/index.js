import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import{BrowserRouter,Routes,Route} from "react-router-dom"
import HomePage from './landing_page/home/HomePage';
import PricingPage from './landing_page/pricing/PricingPage';
import AboutPage from './landing_page/about/AboutPage';
import Signup from './landing_page/signup/Signup';
import SupportPage from './landing_page/support/SupportPage';
import ProductPage from './landing_page/products/Productpage';


import Navbar from './Navbar';
import Footer from './Footer';
import NotFound from './NotFount';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/pricing" element={<PricingPage/>}/>
        <Route path="/support" element={<SupportPage/>}/>
        <Route path="/products" element={<ProductPage/>}/>
        <Route path="*" element={<NotFound/>}/>
    </Routes>
      <Footer/>


  </BrowserRouter>
  
);

