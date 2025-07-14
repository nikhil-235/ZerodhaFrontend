import React from "react";

function Hero() {
  return (
    <div style={{backgroundColor:"#3258a8"}} className="container-fulid">
      <div className="row mb-5 pb-5">
        <div className="col-lg-2 col-sm-12"></div>
        <div className="col-lg-5 col-sm-12 text-white">
            <h1 className="fs-4 mb-5 mt-4" style={{color:"white"}}>Support Portal</h1>
            <p className="fs-4">Search for an answer or browser help topics to create a ticket</p>
            <div className="box-white text-muted text-center my-3"> Eg: how do i activates F&Q, why is my order getting rejcted..</div>
            <div className="support-hero-links my-4">
            <a href="">Track account opening</a>
            <a href="">Track Segment activation </a>
            <a href="">Intraday</a>
            <br/>
            <a href="">margins</a>
            <a href="">Kite user manual</a>
            </div>
        </div>
        <div className="col-lg-1 col-sm-12"></div>
        <div className="col-lg-4 col-sm-12 text-white">
          <a style={{color:"white"}} href=""><p className="text-center my-5">Track Tickets</p></a>
          <h3>Featured</h3>
          <ol className="py-1">
          <li><a style={{color:"white"}} href="">Current Takeovers and Deslisting - January 2024</a></li>
          <li className="py-3"><a style={{color:"white"}} href="">Latest Intrady leverages - MIS & CO</a></li>

          </ol>
          
        </div>
      </div>
    </div>
  );
}

export default Hero;
