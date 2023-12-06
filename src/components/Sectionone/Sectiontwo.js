import React from 'react';
import img1 from '../../assets/img1.PNG'
import { FaArrowRight } from 'react-icons/fa';

const ResponsiveContactSection = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px', padding: '20px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        <img
          src={img1}// Replace with the actual URL or import the image
          alt="Left Image Alt Text"
          style={{
            width: '100%',
            height: 'auto',
            maxWidth: '100%',
            borderRadius: '10px',
            marginBottom: '20px',
          }}
        />
      </div>

      {/* Right Contact Section */}
      <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '10px', width: '100%' }}>
        <h2>Contact Us</h2>
        <form>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="investment">Looking to Invest (Rs):</label>
            <input type="text" id="investment" name="investment" />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label>Checkbox:</label>
            <input type="checkbox" id="checkbox" name="checkbox" />
            <span>jsaaj, akldjkkladjlajl</span>
          </div>
          <button
            style={{
              backgroundColor: '#A73A3A',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '20px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Request callback <FaArrowRight style={{ marginLeft: '5px' }} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResponsiveContactSection;
