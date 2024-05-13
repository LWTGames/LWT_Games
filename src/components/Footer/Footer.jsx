import React from "react";
import "./Footer.css";
import imageAssets from "../../utils/Utils";

const Footer = () => {
   return (
      <div className="Footer">
         <div className="row footer-row">
            <div
               className="col
             col-logo"
            >
               <div className="logo-frame">
                  <img src={imageAssets.logo} alt="" className="footer-logo" />
               </div>
               <h3>Join our newsletter!</h3>
               <p style={{ fontWeight: "100" }}>
                  Stay up to date with all things InCo
               </p>
               <input placeholder="Enter Email Address"></input>
               <button type="button" className="btn btn-info">
                  SUBSCRIBE
               </button>
            </div>
            <div className="col">
               <div className="Loading">
                  <div className="Loading-progress"></div>
               </div>
            </div>
            <div className="col col-about">
               <h2>Explore</h2>
               <ul>
                  <li className="footer-item">Home</li>
                  <li className="footer-item">About Us</li>
                  <li className="footer-item">Contact US</li>
                  <li className="footer-item">Play Bingo</li>
               </ul>
            </div>
            <div className="col">
               <div className="Loading">
                  <div className="Loading-progress"></div>
               </div>
            </div>
            <div className="col col-follow">
               <h2>Follow</h2>
               <ul>
                  <li className="footer-item">Instagram</li>
                  <li className="footer-item">Twitter</li>
                  <li className="footer-item">Linkedin</li>
               </ul>
            </div>
         </div>
      </div>
   );
};

export default Footer;
