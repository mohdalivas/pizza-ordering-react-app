import React from "react";
const Footer = () => (
  <footer
    className="page-footer font-small blue mt-4"
    style={{
      backgroundColor: `#FFF`,
      paddingTop: "5px"
    }}
  >
    <div className="container-fluid text-center text-md-left">
      <div className="row mt-5">
        <div className="col-md-6">
          <h5 className="text-uppercase">Pizza Hub</h5>
          <p>Find any pizza at your own risk</p>
        </div>
        <hr className="clearfix w-100 d-md-none pb-0" />
        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Contact us</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#!">PizzaMania@pizza.com</a>
            </li>
            <li>
              <p>8080808080</p>
            </li>
          </ul>
        </div>
        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Address</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#!">All around the globe</a>
            </li>
            <li>
              <a href="#!">Search the place on your own</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="footer-copyright text-center py-3">
      © 2023 Copyright:
      <a href="www.google.com"> PizzaMania.com</a>
    </div>
  </footer>
);
export default Footer;
