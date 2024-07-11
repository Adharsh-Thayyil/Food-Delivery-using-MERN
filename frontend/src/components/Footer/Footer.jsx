import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus praesentium ratione repellendus similique totam quidem iure voluptate ullam repudiandae iste aliquid porro, sunt, enim hic facilis ipsum. Eos, officiis sit!</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91-987-654-3210</li>
                        <li>contact@forkfrenzy.com</li>
                    </ul>
                </div> 
            </div>
            <hr />
            <p className="footer-copyright">Copyright 2024 © ForkFrenzy.com - All Right Reserved.</p>
        </div>
    )
}

export default Footer
