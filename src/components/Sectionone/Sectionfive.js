import React from 'react';
import { FaDownload } from 'react-icons/fa'; // Import the download icon
import ret from '../../assets/return.PNG';
import longalpha from '../../assets/longalpha.PNG';  // Replace with the actual URL or import the right image

const TwoImagesWithButton = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px', display: 'flex', justifyContent: 'center' }}>
      {/* Left Image */}
      <div style={{ flex: '1', paddingRight: '20px' }}>
        <img
          src={longalpha} // Replace with the actual URL or import the left image
          alt="Left Image Alt Text"
          style={{ width: '100%', maxWidth: '400px', borderRadius: '10px' }}
        />
      </div>

      {/* Right Image */}
      <div style={{ flex: '1', paddingLeft: '20px' }}>
        <img
          src={ret} // Replace with the actual URL or import the right image
          alt="Right Image Alt Text"
          style={{ width: '100%', maxWidth: '400px', borderRadius: '10px' }}
        />
      </div>

      {/* Button */}
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
  );
};

export default TwoImagesWithButton;
