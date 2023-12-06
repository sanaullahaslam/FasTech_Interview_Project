import React from 'react';
import { FaDownload } from 'react-icons/fa'; // Import the download icon
import alpha from '../../assets/alpha.PNG'; // Replace with the actual URL or import the left image
import right from '../../assets/right.PNG'; // Replace with the actual URL or import the right image

const ResponsiveComponent = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px', display: 'flex', justifyContent: 'center' }}>
      {/* Left Section */}
      <div style={{ flex: '1', paddingRight: '20px' }}>
        <img
          src={alpha} // Replace with the actual URL or import the left image
          alt="Left Image Alt Text"
          style={{ width: '100%', maxWidth: '600px', borderRadius: '10px' }}
        />
        <button
          style={{
            backgroundColor: '#A73A3A',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '20px',
            marginTop: '20px',
            cursor: 'pointer',
          }}
        >
          Download Factsheet <FaDownload style={{ marginLeft: '5px' }} />
        </button>
      </div>

      {/* Right Section */}
      <div style={{ flex: '1', paddingLeft: '20px' }}>
        <img
          src={right} // Replace with the actual URL or import the right image
          alt="Right Image Alt Text"
          style={{ width: '100%', maxWidth: '600px', borderRadius: '10px' }}
        />
      </div>
    </div>
  );
};

export default ResponsiveComponent;
