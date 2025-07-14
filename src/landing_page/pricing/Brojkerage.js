import React from "react";

function Brojkerage() {
  return (
    <div className="container">
      <div className="row border-top my-5 pt-3">
        <div className="col-lg-8 col-sm-7 mt-5 text-muted">
          <a style={{textDecoration:"none"}} href="">
            <h3
              className="text-center"
              style={{
                color: "#428df5",
                fontSize: "1.3rem",
                marginRight: "17rem",
              }}
            >
              Brokerage calculator
            </h3>
          </a>
          <ul className="fs-6 p-3 Brokerage pb-5">
            <li>
              Call & Trade and RMs auto-squareoff:Additional charges of ₹50 +
              GST per order.{" "}
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, fi required,shall be charged
              ₹20 per contract note. Couier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equilty (Whcihever is lower).
            </li>
            <li>
              For NRI account(PIS),0.5% or ₹200 per executed order for equity
              (Whichever is lower).
            </li>
            <li>
              If the account is in debit balance,any placed will be charged ₹ 40
              per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>
        <div className="col-lg-4 col-sm-4 mt-5 text-muted">
          <a style={{textDecoration:"none"}} href="">
            <h3 style={{ color: "#428df5", fontSize: "1.3rem" }}>
              List of charges
            </h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brojkerage;
