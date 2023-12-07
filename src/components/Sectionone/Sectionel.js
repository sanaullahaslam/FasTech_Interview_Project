import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import image1 from '../../assets/image1.PNG'; // Adjust the path based on your project structure
import image2 from '../../assets/image2.PNG';  // Adjust the path based on your project structure
import image3 from '../../assets/image3.PNG';  // Adjust the path based on your project structure

const NewsComponent = () => {
  return (
    <div className="container text-center">
      <h2>
        Estee <span style={{ color: 'blue' }}>In News</span>
      </h2>

      <div className="row mt-4">
        {/* Three Images Horizontally */}
        <div className="col-md-4 mt-4">
          <img
            src={image1} // Replace with your actual image path
            alt="News Image 1"
            className="img-fluid"
          />
        </div>
        <div className="col-md-4 mt-4">
          <img
            src={image2} // Replace with your actual image path
            alt="News Image 2"
            className="img-fluid"
          />
        </div>
        <div className="col-md-4 mt-4">
          <img
            src={image3} // Replace with your actual image path
            alt="News Image 3"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
}

export default NewsComponent;
