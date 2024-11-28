//import React from 'react';
//import { assets } from "../../assets/assets";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <h2>Contact us</h2>
          <ul>
            <li> Click here to contact us : </li>
            <li>Email: atmaodr@gmail.com </li>
            <li> Phone: 8925304006</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>Registered Office:</h2>
          <ul>
            <li>No.S2, Thendral Chozha Apartments, </li>
            <li>No.1, 3rd Seaward Road, Thiruvanmiyur, </li>
            <li>Chennai – 600 041, Tamil Nadu, INDIA </li>
          </ul>
        </div>
      </div>

      <p className="footer-copyright">
        <h3>Disclaimer</h3>
        Please note that ATMA ODR is not a law firm and does not provide any
        legal advise whatsoever. ATMA ODR or any of its associates or partners
        or employees or authorized representative does not engage in the
        practice of law or solicit Lawyers in any form whatsoever and none of
        their advice constitutes a legal advise for all good purpose. ATMA ODR
        is having an object to promote, develop and conduct Professional
        Alternative Dispute Resolution (ADR) including Online Dispute Resolution
        (ODR) platform to provide end-to-end alternative dispute resolution
        services such as Arbitration, Conciliation, Negotiation, Mediation among
        other sustainable ADR models. As an advanced technology platform its
        services are designed to provide Online Dispute Resolution (ODR)
        services as well. ATMA ODR is not responsible for any action taken on
        the basis advice or services provided by independent professionals
        associated with or availing the service of ATMA ODR.
        <ul className="disclaimer">
          <li>Terms of Use </li>
          <li>Privacy Policy </li>
        </ul>
      </p>
    </div>
  );
};

export default Footer;
