import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import end from '../../assets/end.PNG';
import { AiFillFacebook, AiFillInstagram, AiFillTwitter, AiFillLinkedin } from 'react-icons/ai';
 // Replace with the actual path to your logo

const FooterSection = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor: '#4D4D4D', color: 'white' }}>
      <div className="row align-items-center">
        {/* Left Side */}
        <div className="col-md-3 p-4">
          <img src={end} alt="Estee Logo" style={{ maxWidth: '100%' }} />
        </div>

        {/* Center */}
        <div className="col-md-6 text-center p-4">
          <p>
            Privacy Policy | Disclaimer & legal terms | Disclosures
          </p>
        </div>

        {/* Right Side */}
        <div className="col-md-3 p-4 text-center">
          <AiFillFacebook size={30} className="mr-2" />
          <AiFillInstagram size={30} className="mr-2" style={{ color: '#8B4513' }} />
          <AiFillTwitter size={30} className="mr-2" />
          <AiFillLinkedin size={30} />
        </div>
      </div>

      {/* Line */}
      <hr style={{ backgroundColor: 'white' }} />

      {/* Below Line */}
      <div className="row p-4">
        {/* Left Side */}
        <div className="col-md-6">
          <p>Portfolio Manager: PMS vide SEBI Registration Number INP 000003146</p>
        </div>

        {/* Right Side */}
        <div className="col-md-6 text-right">
          <p>Copyright © 2022 Estee Advisors Pvt. Ltd</p>
        </div>
      </div>
    </div>
  );
}

export default FooterSection;
