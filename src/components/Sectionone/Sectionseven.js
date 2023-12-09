import React from 'react';
import este1 from '../../assets/este1.PNG'; 
import estee2 from '../../assets/estee2.PNG'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const ResponsiveImageComponent = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src={este1} // Replace with your image URL for the first image
            alt="Image 1"
            className="img-fluid" />
        </div>
        <div className="col-md-6">
          <img
            src={estee2} // Replace with your image URL for the second image
            alt="Image 2"
            className="img-fluid"  />
        </div>
      </div>
    </div>
  );
}

export default ResponsiveImageComponent;
