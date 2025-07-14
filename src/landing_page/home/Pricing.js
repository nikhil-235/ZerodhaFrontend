import React from 'react'

function Pricing() {
    return ( 
            <div className='container-sm mt-3 '>
                <div className='row'>
                    <div className='col-sm-12 p-sm-4 col-lg-4 text-center'>
                        <h1 className='fs-2'>Unbeatable pricing</h1>
                        <p className='fs-6 pt-4 pb-2'>We pioneered the concept of discount broking and price transparency in india.Flat fees and no hidden charges.</p>
                        <a className='text-decoration-none lh-2' href='#'>See Pricing <i className='fa fa-long-arrow-right px-1'></i></a>

                    </div>
                    <div className='col-sm-0 col-lg-2'></div>
                    <div className='col-sm-12 col-lg-6'>
                        <div className='row text-center'>
                            <div className='col-sm-6 col-lg-5 pt-4 border'>
                                <h1>&#8377;0</h1>
                                <p>Free equity delivery and direct mutual funds</p>

                            </div>
                            <div className='col-sm-6 col-lg-5 pt-4 border' >
                                <h1>&#8377;20</h1>
                                <p>Intraday and F&O</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
     );
}

export default Pricing;