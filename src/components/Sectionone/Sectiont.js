import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsFillChatDotsFill, BsPhone } from 'react-icons/bs';

const ContactSection = () => {
  return (
    <div className="container-fluid bg-primary text-white">
      <div className="row">
        {/* Left Side */}
        <div className="col-md-6 p-5">
          <h2>Empowering your portfolio through quant investment</h2>
        </div>

        {/* Right Side */}
        <div className="col-md-6 p-5 text-center">
          <BsFillChatDotsFill size={40} color="white" style={{ backgroundColor: '#8B4513' }} />
          <p className="mt-3">PMS@esteeadvisors.com</p>

          <button className="btn btn-dark mt-3" style={{ backgroundColor: '#8B4513' }}>
            <BsPhone size={20} className="mr-2" />
            +91-8700913486
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
