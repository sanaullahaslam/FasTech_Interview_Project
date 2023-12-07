import React from 'react';
import meet from '../../assets/meet.PNG'; 
import ceo from '../../assets/ceo.PNG';
import chairman from '../../assets/chairman.PNG';  
import 'bootstrap/dist/css/bootstrap.min.css';

const CenteredImagesSection = () => {
  return (
    <div className="container text-center">
      {/* Centered Heading */}
      {/* Images on Left and Right */}
      <div className="row mt-4">
        <div className="col-md-6 offset-md-3">
          {/* Centered Image 1 */}
          <img
            src={meet} // Replace with your image URL for the first centered image
            alt="Centered Image 1"
            className="img-fluid mx-auto d-block"
          />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-6 text-md-left text-center">
          {/* Left-aligned Image 2 */}
          <img
            src={ceo}// Replace with your image URL for the left-aligned image
            alt="Left-aligned Image 2"
            className="img-fluid"
          />
        </div>

        <div className="col-md-6 text-md-right text-center">
          {/* Right-aligned Image 3 */}
          <img
            src={chairman} // Replace with your image URL for the right-aligned image
            alt="Right-aligned Image 3"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
}

export default CenteredImagesSection;
