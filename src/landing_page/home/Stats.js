import React from 'react'

function Stats() {
    return ( 
        <div className='container-sm mt-3 p-5'>
            <div className='row'>
                <div className='col-lg-6 col-sm-12 mt-3'>
                    <h1 className='fs-2'>Trust with confidence</h1>
                    <h2 className='mt-5 fs-4 fw-semibold'>Customer-first always</h2>
                    <p className='fs-6 text-muted'>That's why 1.3+ crore customers trust Zerodha with &#8377;3.5+ <br/> lakhs crores worth of equily investments. </p>
                    <h2 className='mt-3 fs-4 fw-semibold'>No spam or gimmicks</h2>
                    <p className='fs-6 text-muted'>No gimmicks,spam,"gamificaton",or annoying push <br/> notification High quality apps that you use at your pace,the <br/> way you like. </p>
                    <h2 className='mt-3 fs-4 fw-semibold'>The Zerodha Universe</h2>
                    <p className='fs-6 text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs. </p>
                    <h2 className='mt-3 fs-4 fw-semibold'>Do better wit money</h2>
                    <p className='fs-6 text-muted'>With initiavatives like Nudge and skill Switch, we don't just facilitates transactions, but actively help you do better with your money </p>
                </div>
                <div className='col-lg-6 col-sm-12 p-4'>
                    <img style={{width:"90%"}} src='media/images/ecosystem.png'/>
                    <div className='text-center'>
                        <a className='text-decoration-none mx-5' href=''>Explore our products <i class="fa fa-long-arrow-right" aria-hidden='true'></i></a>
                        <a className='text-decoration-none' href=''>Try Kite demo</a>
                    </div>
                    
                </div>

            </div>
        </div>
     );
}

export default Stats;