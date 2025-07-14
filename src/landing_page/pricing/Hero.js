import React from "react";

function Hero() {
  return (
    <div className="container-sm">
        <div className="row text-center mt-5 border-bottom">
            <h1 className="mb-4 fs-2">Pricing</h1>
            <h3 className="text-muted fs-5 mb-5">Free equity investments and flat ₹20 traday and F&O trades</h3>
        </div>
      <div className="row mt-5 py-5">
        <div className="col-lg-4 col-sm-6 mt-5 pricing text-muted">
          <img src="media/images/pricing0.svg" />
          <h1>Free equity delivery</h1>
          <p className="">
            {" "}
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage..
          </p>
        </div>
        <div className="col-lg-4 col-sm-6 mt-5 pricing text-muted">
          <img src="media/images/intradayTrades.svg" />
          <h1>Intraday and F&O trades</h1>
          <p>
            {" "}
            Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades.
          </p>
        </div>
        <div className="col-lg-4 col-sm-6 mt-5 pricing text-muted">
          <img src="media/images/pricing0.svg" />
          <h1>Free direct MF</h1>
          <p>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
