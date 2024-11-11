import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container"> 
        <div className="footer-row">
          <div className="footer-col mt-3">
            <h4 className="text-start">About Clothy</h4>
            <p className="text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed tempora
              repudiandae quisquam temporibus minima porro vitae sunt similique
              animi aperiam! Asperiores sunt similique in amet dicta nesciunt
              dolor sed optio nulla eius!
            </p>
          </div>
          <div className="footer-col mt-3">
            <h4>Quick Links</h4>
            <ul className="links text-start">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Popular Designs</a></li>
              <li><a href="#">Artistic</a></li>
              <li><a href="#">New Products</a></li>
            </ul>
          </div>
          <div className="footer-col mt-3">
            <h4>Newsletter</h4>
            <p>
              Subscribe to our newsletter for a weekly dose of news, updates,
              helpful tips, and exclusive offers.
            </p>
            <form action="#">
              <input type="email" placeholder="Your email" required />
              <button type="submit">SUBSCRIBE</button>
            </form>
            <div className="icons" style={{ fontSize: "20px", marginTop: "10px" }}>
              <i className="fa-brands fa-facebook-f" />
              <i className="fa-brands fa-twitter" />
              <i className="fa-brands fa-linkedin" />
              <i className="fa-brands fa-github" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer

