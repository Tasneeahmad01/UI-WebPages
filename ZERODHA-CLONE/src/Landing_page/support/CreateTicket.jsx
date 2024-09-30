import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faUserCircle, faMagnifyingGlassDollar, faCoins } from "@fortawesome/free-solid-svg-icons";
import './CreatTicket.css';

function CreateTicket() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5 text-center text-md-start mt-5">
          <h5 style={{ color: "#444444", letterSpacing: "1px" }}>
            To create a ticket, select a relevant topic
          </h5>
        </div>
      </div>

      <div className="row justify-content-between mt-4">
        <div className="col-md-4 card-block">
          <h5 className="card-title">
            <a href="/category/account-opening" className="text-decoration-none">
              <FontAwesomeIcon icon={faCirclePlus} className="me-2" />
              Account Opening
            </a>
          </h5>
          <ul className="lh-lg list-unstyled mt-4">
            <li><a href="#">Getting started</a></li>
            <li><a href="#">Online</a></li>
            <li><a href="#">Charges</a></li>
            <li><a href="#">Company, Partnership and HUF</a></li>
            <li><a href="#">Non Resident Indian (NRI)</a></li>
          </ul>
        </div>

        <div className="col-md-4 card-block">
          <h5 className="cursor-pointer">
            <a href="">
              <FontAwesomeIcon icon={faUserCircle} className="me-2" />
              Your Zerodha Account
            </a>
          </h5>
          <ul className="lh-lg list-unstyled mt-4">
            <li><a href="#">Login credentials</a></li>
            <li><a href="#">Your Profile</a></li>
            <li><a href="#">Account modification and segment addition</a></li>
            <li><a href="#">CMR & DP ID</a></li>
            <li><a href="#">Nomination</a></li>
            <li><a href="#">Transfer and conversion of shares</a></li>
          </ul>
        </div>

        <div className="col-md-4 card-block">
          <h5 className="cursor-pointer">
            <a href="">
              <i className="category-icons icon-trading-and-platforms"></i>
              Trading and Markets
            </a>
          </h5>
          <ul className="lh-lg list-unstyled mt-4">
            <li><a href="#">Trading FAQs</a></li>
            <li><a href="#">Kite</a></li>
            <li><a href="#">Margins</a></li>
            <li><a href="#">Products and order types</a></li>
            <li><a href="#">Corporate actions</a></li>
            <li><a href="#">Kite features</a></li>
          </ul>
        </div>
      </div>

      <div className="row justify-content-between mt-4">
        <div className="col-md-4 card-block">
          <h5 className="cursor-pointer">
            <a href=""  >
              <FontAwesomeIcon icon={faMagnifyingGlassDollar} className="me-2" />
              Console
            </a>
          </h5>
          <ul className="lh-lg list-unstyled mt-4">
            <li><a href="#">IPO</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Funds statement</a></li>
            <li><a href="#">Profile</a></li>
            <li><a href="#">Reports</a></li>
            <li><a href="#">Referral program</a></li>
          </ul>
        </div>

        <div className="col-md-4 card-block">
          <h5 className="cursor-pointer">
            <a href="" >
              <FontAwesomeIcon icon={faCoins} className="me-2" />
              Coin
            </a>
          </h5>
          <ul className="lh-lg list-unstyled mt-4">
            <li><a href="#">Understanding mutual funds and Coin</a></li>
            <li><a href="#">Coin app</a></li>
            <li><a href="#">Coin web</a></li>
            <li><a href="#">Transaction and reports</a></li>
            <li><a href="#">National Pension Scheme (NPS)</a></li>
          </ul>
        </div>

        <div className="col-md-4 card-block">
          <h5 className="cursor-pointer">
            <a href="" className="primary"  >
              <i className="category-icons icon-trading-and-platforms"></i>
              Funds
            </a>
          </h5>
          <ul className="lh-lg list-unstyled mt-4">
            <li><a href="#">Fund withdrawal</a></li>
            <li><a href="#">Adding funds</a></li>
            <li><a href="#">Adding bank accounts</a></li>
            <li><a href="#">eMandates</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
