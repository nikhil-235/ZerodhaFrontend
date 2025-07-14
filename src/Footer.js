import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="border-top bg-light ">
        <div className="container mt-4">
          <div className="row">
            <div className="col-sm-5 col-lg-3 ms-5 mt-5">
              <img src="media/images/logo.svg" style={{ width: "50%" }} />
              <p className="fs-6 pt-2 pb-3 text-muted">
                &copy; 2010 - 2024, Not Zerodha Broking Ltd.
                <br />
                All rights reserved.
              </p>
              <div className="d-flex gap-2 text-muted">
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-linkedin-in"></i>
                <i class="fa-brands fa-telegram"></i>
              </div>
            </div>
            <div className="col-sm-5 col-lg-3 mt-5">
              <p className="active ps-4">Company</p>
              <ul
                style={{ listStyleType: "none" }}
                className="text-muted Footer"
              >
                <Link to="/about">
                  <li>About</li>
                </Link>
                <Link to="/products">
                  <li>Products</li>
                </Link>
                <Link to="/pricing">
                  <li>Pricing</li>
                </Link>
                <a href="">
                  <li>Referral programme</li>
                </a>
                <a href="">
                  <li>Careers</li>
                </a>
                <a href="">
                  <li>Zerodha.tech</li>
                </a>
                <a href="">
                  <li>Press & media</li>
                </a>
                <a href="">
                  <li>Zerodha cares(CSR)</li>
                </a>
              </ul>
            </div>
            <div className="col-sm-5 col-lg-2 mt-5">
              <p className="active ps-4">Support</p>
              <ul
                style={{ listStyleType: "none" }}
                className="text-muted Footer"
              >
                <a href="">
                  <li>Contact</li>
                </a>
                <a href="">
                  <li>Support portal</li>
                </a>
                <a href="">
                  <li>Z-Connect blog</li>
                </a>
                <a href="">
                  <li>List of charges</li>
                </a>
                <a href="">
                  <li>Downloads & resources</li>
                </a>
              </ul>
            </div>
            <div className="col-sm-5 col-lg-3 mt-5 px-sm-5">
              <p className="active ps-4">Account</p>
              <ul
                style={{ listStyleType: "none" }}
                className="text-muted Footer"
              >
                <a href="">
                  <li>Open an account</li>
                </a>
                <a href="">
                  <li>Fund transfer</li>
                </a>
                <a href="">
                  <li>60 day challenge</li>
                </a>
              </ul>
            </div>
          </div>
          <div className="row mt-5 ps-4">
            <div className="col-11 ms-5 ps-5 text-muted fs-6 text-small">
              <p>
                Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration
                no.: INZ000031633 CDSL: Depository services through Zerodha
                Securities Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015
                Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX:
                46025 – SEBI Registration no.: INZ000038238 Registered Address:
                Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp.
                Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078,
                Karnataka, India. For any complaints pertaining to securities
                broking please write to complaints@zerodha.com, for DP related
                to dp@zerodha.com. Please ensure you carefully read the Risk
                Disclosure Document as prescribed by SEBI | ICF
              </p>
              <p>
                Procedure to file a complaint on SEBI SCORES: Register on SCORES
                portal. Mandatory details for filing complaints on SCORES: Name,
                PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
                Communication, Speedy redressal of the grievances
              </p>
              <p>
                Investments in securities market are subject to market risks;
                read all the related documents carefully before investing.
              </p>
              <p>
                "Prevent unauthorised transactions in your account. Update your
                mobile numbers/email IDs with your stock brokers. Receive
                information of your transactions directly from Exchange on your
                mobile/email at the end of the day. Issued in the interest of
                investors. KYC is one time exercise while dealing in securities
                markets - once KYC is done through a SEBI registered
                intermediary (broker, DP, Mutual Fund etc.), you need not
                undergo the same process again when you approach another
                intermediary." Dear Investor, if you are subscribing to an IPO,
                there is no need to issue a cheque. Please write the Bank
                account number and sign the IPO application form to authorize
                your bank to make payment in case of allotment. In case of non
                allotment the funds will remain in your bank account. As a
                business we don't give stock tips, and have not authorized
                anyone to trade on behalf of others. If you find anyone claiming
                to be part of Zerodha and offering such services, please create
                a ticket here.
              </p>
            </div>
          </div>
          <div className="mt-3 mb-1 links">
            <a href="">NSE</a>
            <a href="">BSE</a>
            <a href="">MCX</a>
            <a href="">Terms & condtions</a>
            <a href="">Policies & procedures</a>
            <a href="">Privacy policy</a>
            <a href="">Disclosure</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
