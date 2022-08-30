import "./FooterStyles.css"
import {FaHome, FaPhone, FaMailBulk, FaGithub, FaLinkedin} from "react-icons/fa";
import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
    <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}} />
                <div>
                    <p>1600 Whatever Avenue SW </p>
                    <p>Atlanta, Ga 30331</p>
                </div>
            </div>
            <div className="phone">
                <h4><FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}} />404-389-3512</h4>
            </div>
            <div className="email">
                <h4><FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}} />Thegovernorbrown@gmail.com</h4>
            </div>
        </div>
        <div className="right">
            <h4>PlaceHolder</h4>
            <p>PlaceHolder</p>
            <div className="social">
               <a href = "https://github.com/GovernorBrown" target="_blank" rel="noreferrer"> <FaGithub size={30} style={{color:"#fff", marginRight:"1rem"}}/> </a>
                <a href = "https://www.linkedin.com/in/governor-brown-5661801b8/" target="_blank" rel="noreferrer"><FaLinkedin size={30} style={{color:"#fff", marginRight:"1rem"}} /></a>
            </div>
        </div>
    </div>
    </div>
    
  )
}

export default Footer