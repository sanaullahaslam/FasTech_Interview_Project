import React from 'react';
import img2 from '../../assets/img2.PNG'

const ResponsiveImageSection = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <img
        src={img2}// Replace with the actual URL or import the image
        alt="Your Alt Text"
        style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
      />
    </div>
  );
};

export default ResponsiveImageSection;
