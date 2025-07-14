import React from "react";

function Hero() {
  return (
    <>
      <h1 className="fs-3 text-center py-5 my-4">
        We Pioneered the discount broking model in India.
        <br />
        Now, we are breaking ground with our technology.
      </h1>
      <div className="container-sm border-top">
        <div className="row">
          <div style={{lineHeight:"2rem"}} className="col-sm-12 col-lg-6 p-5 text-muted mt-lg-5 fs-6">
            <p>
              We kick-started operations on the 15th of August, 2010 with the
              goal of breaking all barriers that traders and investors face in
              India in terms of cost, support, and technology. We named the
              company Zerodha, a combination of Zero and "Rodha", the Sanskrit
              word for barrier.
            </p>
            <p className="py-2">
              Today, our disruptive pricing models and in-house technology have
              made us the biggest stock broker in India.
            </p>
            <p>
              Over 1+ Crore clients place millions of orders every day through
              our powerful ecosystem of investment platforms, contributing over
              15% of all Indian retail trading volumes.
            </p>
          </div>
          <div style={{lineHeight:"2rem"}}  className="col-sm-12 col-lg-6 p-5 text-muted mt-lg-5 fs-6">
            <p>
              In addition, we run a number of popular open online educational
              and community initiatives to empower retail traders and investors.
            </p>
            <p className="py-2">
              <a href="" style={{ textDecoration: "none" }}>
                Rainmatter
              </a>
              , our fintech fund and incubator, has invested in several fintech
              startups with the goal of growing the Indian capital markets.
            </p>
            <p>
              And yet, we are always up to something new every day. Catch up on
              the latest updates on our blog or see what the media is saying
              about us.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
