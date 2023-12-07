import React from 'react';
import girl from '../../assets/girl.PNG'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactSection = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Contact Section on Left */}
        <div className="col-md-6 p-4">
          <h2 className="text-primary">Request Callback</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label htmlFor="mobile">Mobile No. *</label>
              <input type="text" className="form-control" id="mobile" placeholder="Enter your mobile number" />
            </div>
            <div className="form-group form-check">
              <input type="checkbox" className="form-check-input" id="terms" />
              <label className="form-check-label" htmlFor="terms">qqdkhlkdhw djdhwkjdhw</label>
            </div>
            <button type="submit" className="btn btn-primary">
              Request Callback <span>&rarr;</span>
            </button>
          </form>
        </div>

        {/* Image on Right */}
        <div className="col-md-6 p-0">
          <img
            src={girl} // Replace with your image URL
            alt="Contact Image"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
