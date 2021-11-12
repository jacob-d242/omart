import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="rowbottom">
          {/* Column1 */}
          <div className="col">
            <h4>Omart Kenya</h4>
          
              <p>80100</p>
              <p>Nyerere Avenue</p>
              <p>Mombasa Kenya</p>
           
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Contact Us</h4>
            <ui className="list-none">
              <li><Link to="https://m.facebook.com/OmartKenya/"></Link></li>
                <li><p>Phone:<Link to="tel:+254705274875"> +254705274875</Link></p></li>
              <li>Email</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Useful Links</h4>
            <ui className="list-none">
                <li>Shop</li>
                <li>About us</li>
                 <li>Terms of service</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="rowfooter">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Omart All rights reserved 
         </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;