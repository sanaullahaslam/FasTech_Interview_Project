import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import img from '../../assets/img.PNG'

const PortfolioSection = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Empowering your portfolio through <br/> quant investment</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
      </p>
     
      <button
        style={{
          backgroundColor: '#A73A3A',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '20px', // Rounded border
          marginTop: '20px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 'auto', // Center the button horizontally
        }}
      >
        GET A DEMO <FaArrowRight style={{ marginLeft: '5px' }} />
      </button>
       <img
        src={img} // Replace with the actual URL or import the image
        alt="Your Alt Text"
        style={{ maxWidth: '100%', marginTop: '20px', borderRadius: '10px' }}
      />
    </div>
  );
};

export default PortfolioSection;
