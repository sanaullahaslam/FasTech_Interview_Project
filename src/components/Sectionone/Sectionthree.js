import React from 'react';
import img2 from '../../assets/img2.PNG';
import data from '../../assets/data.PNG';
import technology from '../../assets/technology.PNG';
import team from '../../assets/team.PNG';

const ImageSection = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {/* Centered Heading Image */}
      <img
        src={img2}
        alt="Centered Image Alt Text"
        style={{
          width: '100%',
          maxWidth: '800px',
          height: 'auto',
          display: 'block',
          margin: '0 auto',
          borderRadius: '10px',
        }}
      />

      {/* Three Images in Series */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          marginTop: '20px',
          flexWrap: 'wrap', // Allow images to wrap on smaller screens
        }}
      >
        {/* Image 1 */}
        <img
          src={team}
          alt="Image 1 Alt Text"
          style={{ width: '100%', maxWidth: '300px', borderRadius: '10px', marginBottom: '20px' }}
        />

        {/* Image 2 */}
        <img
          src={technology}
          alt="Image 2 Alt Text"
          style={{ width: '100%', maxWidth: '300px', borderRadius: '10px', marginBottom: '20px' }}
        />

        {/* Image 3 */}
        <img
          src={data}
          alt="Image 3 Alt Text"
          style={{ width: '100%', maxWidth: '300px', borderRadius: '10px', marginBottom: '20px' }}
        />
      </div>
    </div>
  );
};

export default ImageSection;
