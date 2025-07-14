import React from 'react'
import Hero from './Hero';
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import Brojkerage from './Brojkerage';
import OpenAccount from '../../OpenAccount';

function PricingPage() {
    return ( 
        <>
            <Hero/>
            <OpenAccount/>
            <Brojkerage/>
        </>
     );
}

export default PricingPage;