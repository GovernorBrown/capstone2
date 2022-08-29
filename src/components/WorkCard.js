import "./WorkCardStyles.css";
import React from 'react'
import { NavLink } from "react-router-dom";
import complex from "../assets/complex.png";
import thinkbeyond from "../assets/ThinkBeyond.png"
import nobleshop from "../assets/nobleshop.png";
const WorkCard = () => {
  return (
     <>
     <h1 className="project-heading">Projects</h1>
    <div className="work-container">
        <div className="project-contatiner">
            <div className="project-card">
                <img src={complex} alt=""/>
                <h2 className="project-title">Complex Redesign</h2>
                <div className="pro-details">
                    <p>Project met to redesign Complex's Website; incorporating new style elements.</p>
                    <div className="pro-btns">
                        <NavLink to="" className="btn">View</NavLink>
                   
                        <NavLink to="" className="btn">Source</NavLink>
                    </div>
                </div>
            </div>
        </div>
        <div className="project-contatiner">
            <div className="project-card">
                <img src={thinkbeyond} alt="" />
                <h2 className="project-title">ThinkBeyond Website</h2>
                <div className="pro-details">
                    <p>Incorporated 3rd Party API to solve educational disparity amongst low income communities</p>
                    <div className="pro-btns">
                        <NavLink to="" className="btn">View</NavLink>
                   
                        <NavLink to="" className="btn">Source</NavLink>
                    </div>
                </div>
            </div>
        </div>
        <div className="project-contatiner">
            <div className="project-card">
                <img src={nobleshop} alt="" />
                <h2 className="project-title">Noble Shop</h2>
                <div className="pro-details">
                    <p>Design E-commerce platform, incorporating relational database for product storage</p>
                    <div className="pro-btns">
                        <NavLink to="" className="btn">View</NavLink>
                   
                        <NavLink to="" className="btn">Source</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    </>
  )
}

export default WorkCard