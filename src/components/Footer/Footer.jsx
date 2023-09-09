import React from 'react';
import './Fotter.css'; 
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>Contact Us</h3>
            <p>Email: contact@yourstore.com</p>
            <p>Phone: (555) 123-4567</p>
          </div>
          <div className="col-md-6">
            <h3>Shopping Cart</h3>
            <p>Total Items: 5</p>
            <p>Total Price: $100.00</p>
          </div>
        </div>
        <p>&copy; {new Date().getFullYear()} Your Store</p>
      </div>
    </footer>
  );
};

export default Footer;
