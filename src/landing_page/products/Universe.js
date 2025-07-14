import React from "react";

function Universe() {
  return (
    <div className="container">
      <div className="row mt-5 text-center">
        <p>
          Want to know more about our technology stack? Check out the
          Zerodha.tech blog.
        </p>
        <h1 className="mt-4 mb-4 pt-3">The Zerodha Universe</h1>
        <p className="pb-5 text-muted">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="row">
          <div className="col-lg-4 col-sm-4 images text-muted">
            <img src="media/images/smallcaseLogo.png" />
            <p className="">Teematic investment platform</p>
            <img src="media/images/zerodhaFundhouse.png" />
            <p>Asset management</p>
          </div>
          <div className="col-lg-4 col-sm-4 images text-muted">
            <img src="media/images/streakLogo.png" />
            <p>Algo & strategy platform</p>
            <img src="media/images/goldenpiLogo.png" />
            <p>Bonds trading platform</p>
          </div>
          <div className="col-lg-4 col-sm-4 images text-muted ">
            <img src="media/images/sensibullLogo.svg" />
            <p>Options trading platform</p>
            <img src="media/images/dittoLogo.png" />
            <p>insurance</p>
          </div>
        </div>

        <div className="text-center">
          <button className="btn btn-primary px-3 my-5 text-center  px-4">
            Sign up now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Universe;
