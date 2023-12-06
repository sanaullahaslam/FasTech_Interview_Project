import React from 'react';
import img1 from '../../assets/img1.PNG'
import { FaArrowRight } from 'react-icons/fa';

const InvestmentSection = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Left Image */}
        <div style={{ flex: '1', position: 'relative' }}>
          <img
            src={img1}// Replace with the actual URL or import the image
            alt="Left Image Alt Text"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '10px',
              position: 'absolute',
              top: '0',
              left: '0',
            }}
          />
        </div>

        {/* Contact Section */}
        <div
          style={{
            flex: '1',
            border: '1px solid #ddd',
            padding: '20px',
            borderRadius: '10px',
            textAlign: 'left',
          }}
        >
          <h2>Looking for Investment Solutions?</h2>
          <form>
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="name">Name *</label>
              <input type="text" id="name" placeholder="Enter your name" />
            </div>

            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="email">Email *</label>
              <input type="email" id="email" placeholder="Enter your email" />
            </div>

            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="mobile">Mobile No. *</label>
              <input type="tel" id="mobile" placeholder="Enter your mobile number" />
            </div>

            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="investment">Looking to Invest (in Rs.)</label>
              <input type="text" id="investment" placeholder="Enter investment amount" />
            </div>

            <div style={{ marginBottom: '15px' }}>
              <input type="checkbox" id="terms" />
              <label htmlFor="terms" style={{ marginLeft: '5px' }}>
                siaodhllwkdkdkhwdhlhlhk
              </label>
            </div>

            <button
              type="submit"
              style={{
                backgroundColor: '#A73A3A',
                color: 'white',
                padding: '10px 20px',
                borderRadius: '20px',
                cursor: 'pointer',
              }}
            >
              Request Callback
            </button>
          </form>
      
        </div>
      </div>
    </div>
  );
};

export default InvestmentSection;
