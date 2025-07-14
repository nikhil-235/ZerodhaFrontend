import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  gogglePlay,
  appStore,
}) {
  return (
    <>
      <div className="container-sm">
        <div className="row py-5">
          <div className=" col-sm-12 col-lg-6">
            <img style={{ width: "80%" }} src={imageURL} />
          </div>
          <div className="col-sm-12 col-lg-5 pt-sm-4 mt-sm-4 ps-5">
            <h1>{productName}</h1>
            <p style={{ lineHeight: "2em" }} className="py-4 text-muted">
              {productDescription}
            </p>
            <div className="d-flex gap-5 my-3">
              <a
                className=""
                style={{ textDecoration: "none", color: "blue" }}
                href={tryDemo}
              >
                Try Demo <i className="fa fa-long-arrow-right"></i>
              </a>
              <a
                style={{ textDecoration: "none", color: "blue" }}
                href={learnMore}
              >
                Learn More <i className="fa fa-long-arrow-right"></i>
              </a>
            </div>
            <div className="d-flex gap-3">
              <a href={gogglePlay}>
                <img src="media/images/googlePlayBadge.svg" />
              </a>
              <a href={appStore}>
                <img src="media/images/appstoreBadge.svg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftSection;
