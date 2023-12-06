import React from 'react';
import ialpha from '../../assets/ialpha.PNG'; // Replace with the actual URL or import the first image
import ialpha2 from '../../assets/ialpha2.PNG'; // Replace with the actual URL or import the second image

const TwoImagesResponsive = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {/* First Image */}
      <img
        src={ialpha} // Replace with the actual URL or import the first image
        alt="Image 1 Alt Text"
        style={{ width: '100%', maxWidth: '600px', borderRadius: '10px', marginBottom: '20px' }}
      />

      {/* Second Image */}
      <img
        src={ialpha2} // Replace with the actual URL or import the second image
        alt="Image 2 Alt Text"
        style={{ width: '100%', maxWidth: '600px', borderRadius: '10px' }}
      />
    </div>
  );
};

export default TwoImagesResponsive;
