import React from 'react'

function Education() {
    return ( 
         <div className='container-sm mt-4 '>
                <div className='row'>
                    <div className='col-sm-11 py-sm-5 col-lg-6'>
                        <img className='' style={{width:"85%"}} src='media/images/education.svg'/>
                    </div>
                    <div className='col-sm-12 col-lg-6 mt-lg-5 mt-sm-3'>
                        <h1 className='fs-2 mt-lg-5'>Free and open market education</h1>
                        <p className='fs-6 mt-4 mb-4'>Varsity,the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                        <a className='text-decoration-none' href='#'>Versity <i className='fa fa-long-arrow-right px-1'></i></a>
                         <p className='fs-6 mt-5 mb-4'>TradingQ&A,the most active trading and investment community in india for all your market related queries.</p>
                        <a className='text-decoration-none' href='#'>TradingQ&A <i className='fa fa-long-arrow-right px-1'></i></a>
                        
                    </div>
                </div>
            </div>
        
     );
}

export default Education;