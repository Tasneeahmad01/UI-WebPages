import React from 'react';
// import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome CSS
import './Footer.css'
function Footer() {
  return (
    <footer id="footer" className="py-4 bg-light border-top">
      <div className="container">
        <div className="row justify-content-between align-items-start main-footer">
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="footer-logo mb-3">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaavLLdem00qFEXnHlaXsLzcic3s4cLWHS_pKJu7_6b8BB61VMyV8mWNmmIzRzJuqhEw&usqp=CAU" 
                alt="Zerodha Logo" 
                style={{ width: "150px" }} 
              />
            </div>
            <p className="text-muted mb-1">© 2010 - 2024, Zerodha Broking Ltd.</p>
            <p className="text-muted">All rights reserved.</p>
            <ul className="list-inline social mb-0 fs-5">
              <li className="list-inline-item ">
                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/zerodhaonline">
                <i class="fa-brands fa-x-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a target="_blank" rel="noopener noreferrer" href="https://facebook.com/zerodha.social">
                <i class="fa-brands fa-square-facebook"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/zerodhaonline/">
                <i class="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/company/zerodha">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
               
              </li><br />
              <hr style={{color:"gray"}}/>
              <li className="list-inline-item">
                <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@zerodhaonline">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a target="_blank" rel="noopener noreferrer" href="https://whatsapp.com/channel/0029Va8tzF0EquiIIb9j791g">
                  <i className="fa-brands fa-whatsapp "></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a target="_blank" rel="noopener noreferrer" href="https://t.me/zerodhain">
                  <i className="fa-brands fa-telegram"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 Icon">
            <ul className="list-unstyled">
              <li className=" mb-2 active">Company</li>
              <li><a href="https://zerodha.com/about/" className="text-dark">About</a></li>
              <li><a href="https://zerodha.com/products/" className="text-dark">Products</a></li>
              <li><a href="https://zerodha.com/pricing/" className="text-dark">Pricing</a></li>
              <li><a href="https://zerodha.com/refer/" className="text-dark">Referral programme</a></li>
              <li><a href="https://careers.zerodha.com" className="text-dark">Careers</a></li>
              <li><a href="https://zerodha.tech" className="text-dark">Zerodha.tech</a></li>
              <li><a href="https://zerodha.com/media/" className="text-dark">Press & media</a></li>
              <li><a href="https://zerodha.com/cares/" className="text-dark">Zerodha Cares (CSR)</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 Icon">
            <ul className="list-unstyled">
              <li className="font-weight-bold mb-2 active">Support</li>
              <li><a href="https://zerodha.com/contact/" className="text-dark">Contact us</a></li>
              <li><a href="https://support.zerodha.com" className="text-dark">Support portal</a></li>
              <li><a href="https://zerodha.com/z-connect/" className="text-dark">Z-Connect blog</a></li>
              <li><a href="https://zerodha.com/charges/" className="text-dark">List of charges</a></li>
              <li><a href="https://zerodha.com/resources/" className="text-dark">Downloads & resources</a></li>
              <li><a href="/videos" className="text-dark">Videos</a></li>
              <li><a href="https://stocks.zerodha.com" className="text-dark">Market overview</a></li>
              <li>
                <a href="https://support.zerodha.com/category/your-zerodha-account/your-profile/ticket-creation/articles/how-do-i-create-a-ticket-at-zerodha" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="text-dark">
                  How to file a complaint?
                </a>
              </li>
              <li>
                <a href="https://support.zerodha.com/category/your-zerodha-account/your-profile/ticket-creation/articles/track-complaints-or-tickets" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="text-dark">
                  Status of your complaints
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 Icon">
            <ul className="list-unstyled">
              <li className="font-weight-bold mb-2 active">Account</li>
              <li><a href="https://zerodha.com/open-account/" className="text-dark">Open an account</a></li>
              <li><a href="https://zerodha.com/fund-transfer/" className="text-dark">Fund transfer</a></li>
            </ul>
          </div>
        </div>
        <div className="row smallprint text-muted mt-4">
          <div className="col-12 paragraph">
            <p>
              Zerodha Broking Ltd.: Member of NSE, BSE​ & MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services
              through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt.
              Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154,
              4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For
              any complaints pertaining to securities broking please write to{' '}
              <a href="mailto:complaints@zerodha.com">complaints@zerodha.com</a>, for DP related to{' '}
              <a href="mailto:dp@zerodha.com">dp@zerodha.com</a>. Please ensure you carefully read the Risk Disclosure Document as
              prescribed by SEBI | ICF
            </p>
            <p>
              Procedure to file a complaint on{' '}
              <a href="https://scores.sebi.gov.in/" target="_blank" rel="noopener noreferrer">
                SEBI SCORES
              </a>
              : Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number,
              E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
            </p>
            <p>
              <a href="https://smartodr.in/" target="_blank" rel="noopener noreferrer">
                Smart Online Dispute Resolution
              </a>{' '}
              |{' '}
              <a
                href="https://zerodha-common.s3.ap-south-1.amazonaws.com/Downloads-and-resources/Smart%20ODR%20info.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Grievances Redressal Mechanism
              </a>
            </p>
            <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
            <p>
            Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
            </p>
            <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please <a href="">create a ticket here.</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
