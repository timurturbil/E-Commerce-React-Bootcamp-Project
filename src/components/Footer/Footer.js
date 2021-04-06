import React from 'react'
import "./Footer.scss"
import {Input } from 'reactstrap';
import mountain from "../../assets/mountain.png"

const Footer = () => {
  return (
    <>
    <div className="footer">
    <div className="row">
        <div className="col-md-4"><label>Sign up for news,sales or catalog</label></div>
        <div className="col-md-4"> <Input placeholder="Enter your email address" /></div>
        <div className="col-md-2"><a href="#" className="link">FIND A STORE</a></div>
        <div className="col-md-2"><a href="#" className="link">TAKE A TEST RIDE</a></div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <ul>
          <h4>About Us</h4>
            <li><a href="#">About Mountain</a></li>
            <li><a href="#">Chill Foundation</a></li>
            <li><a href="#">Accessibility</a></li>
            <li><a href="#">Performer Program</a></li>
          </ul>
        </div>
        <div className="col-md-3">
          <ul>
          <h4>Discover</h4>
            <li><a href="#">The Mountain Blog</a></li>
            <li><a href="#">#Mountain Team</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">2021 Spring Lookbook</a></li>
          </ul>
        </div>
        <div className="col-md-3">
          <ul>
          <h4>Self Service</h4>
            <li><a href="#">Track Your Order</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Shipping Policy</a></li>
          </ul>
        </div>
        <div className="col-md-2">
          <ul>
          <h4>Get Help</h4>
            <li><a href="#">Help & FAQS</a></li>
            <li><a href="#">Email Us</a></li>
            <li><a href="#">(800)000-0000</a></li>
          </ul>
        </div>
        <div className="col-md-1">
          <img src={mountain}/>
        </div>
      </div>
      <div className="row end">
        <div className="col-md-1"><span className="region">US/EN</span></div>
        <div className="col-md-3"><span className="copy">&copy;2021 Collection</span></div>
        <div className="col-md-4 icon">
          <i className="fab fa-facebook-f f"></i>
          <i className="fab fa-twitter f"></i>
          <i className="fab fa-youtube f"></i>
          <i className="fab fa-instagram f"></i>
          <i className="fab fa-pinterest-p f"></i>
        </div>
        <div className="col-md-4 terms">
          <span><a href="#">Terms & Conditions</a> </span>
          <span> <a href="#">Privacy</a></span>
          <span><a href="#"> User Content</a></span>
        </div>
      </div>
    </div>
    
  </>
  )
}

export default Footer;
