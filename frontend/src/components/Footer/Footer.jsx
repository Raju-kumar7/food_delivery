import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus laboriosam possimus rerum illo ullam reiciendis, minus aut nostrum aliquid. Quasi consectetur magni nostrum quam alias provident laborum eum, eligendi quis!</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>Company</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>Get In Touch</h2>
            <ul>
                <li>+91-1234567890</li>
                <li>support@zomato.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 @ Zomato.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
