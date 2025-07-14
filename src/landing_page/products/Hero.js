import React from "react";

function Hero() {
  return (
    <div className="container-sm border-bottom">
      <div className="row text-center my-5 p-3">
          <h1>Technology</h1>
          <p className="py-2 text-muted">Sleek,modern and intutive trading platforms</p>
          <p className="fs-6">
            Check out our{" "}
            <a style={{ textDecoration: "none" }} href="#">
              investment offerings <i className="fa fa-long-arrow-right"></i>
            </a>
          </p>
      </div>
    </div>
  );
}

export default Hero;
