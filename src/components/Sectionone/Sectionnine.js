import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TestimonialsComponent = () => {
  return (
    <div id="testimonialCarousel" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        {[1, 2, 3, 4, 5].map((index) => (
          <div key={index} className={`carousel-item${index === 1 ? ' active' : ''}`}>
            <div className="container text-center">
              <h2>
                What people say about us
                <span style={{ color: 'blue' }}> About us</span>
              </h2>

              <div className="row mt-4">
                {[1, 2, 3].map((boxIndex) => (
                  <div key={boxIndex} className="col-md-4 mt-4">
                    <div className="border p-3">
                      {/* Rating Stars */}
                      <div>
                        {[1, 2, 3, 4, 5].map((star) => (
                          <span key={star} className="text-warning">&#9733;</span>
                        ))}
                      </div>

                      {/* Testimonial Message */}
                      <p className="mt-2">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                      </p>

                      {/* Image in Circle */}
                      <img
                        src="https://via.placeholder.com/50" // Replace with your image URL
                        alt="Avatar"
                        className="rounded-circle mx-auto d-block mt-2"
                      />

                      {/* Name and City */}
                      <p className="mt-2">John Doe</p>
                      <p className="text-muted">City Name</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Controls */}
      <a className="carousel-control-prev" href="#testimonialCarousel" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#testimonialCarousel" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default TestimonialsComponent;
