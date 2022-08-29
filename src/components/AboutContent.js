import "./AboutContentStyles.css";
import React from 'react'
import { Link } from "react-router-dom";
import governor from "../assets/Governor.jpeg";
const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who am I?</h1>
            <p>My name is Governor Brown and I am a full-stack web developer. This is a simple site <br />
            I created to display some of my work</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack-top">
                    <img src={governor} className="img" alt="true"/>
                </div> 
               
            </div>
        </div>
    </div>
  )
}

export default AboutContent