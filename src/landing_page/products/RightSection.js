import React from "react";

function RightSection({
  productName,
  productDescription,
  learnMore,
  imageURL,
}) {
  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-sm-12 col-lg-4 pt-sm-4 mt-sm-4">
          <h1>{productName}</h1>
          <p style={{ lineHeight: "2em" }} className="pb-3 text-muted">
            {productDescription}
          </p>
          <a
            className=""
            style={{ textDecoration: "none", color: "blue" }}
            href={learnMore}
          >
            Learn More <i className="fa fa-long-arrow-right"></i>
          </a>
        </div>
        <div className=" col-sm-12 col-lg-6 ms-5 ps-5">
          <img style={{ width: "100%" }} src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
