import React from 'react'

function Hero() {
    return ( 
        <div className="container p-5 mb-5">
            <div className='row text-center' >
                <img src='media/images/homeHero.png' alt='Hero Image'className='mb-5' />
                <h1 className='mt-5'>Invest in everything</h1>
                <p>Online platform to invest in stocks, dervatives,mutual funds,and more</p>
                <button style={{width:"30%", margin:"0 auto"}} className='btn btn-primary px-3 py-2 fs-6 mb-5'>Signup Now</button>
            </div>
        </div>
        
     );
}
export default Hero;