import "./FirstCardStyles.css";
import React from 'react'
import { Link } from "react-router-dom"
const FirstCard = () => {
  return (
    <div className="pricing">
        <div className="card-container">
            <div className="card">
                <h3>Languages</h3>
                <span className="bar"></span>
                {/*<p className="btc">100</p>*/}
                <p>MongoDB</p>
                <p>Express</p>
                <p>HTML5, CSS, JS</p>
                <p>Node.js</p>
                <Link to="/contact" className="btn">Placeholder</Link>
            </div>
            <div className="card">
                <h3>Languages</h3>
                <span className="bar"></span>
                {/*<p className="btc">100</p>*/}
                <p>MySql</p>
                <p>Express</p>
                <p>React</p>
                <p>Node.Js</p>
                <Link to="/contact" className="btn">Placeholder</Link>
            </div>
            <div className="card">
                <h3>Languages</h3>
                <span className="bar"></span>
                {/*<p className="btc">100</p>*/}
                <p>MySql</p>
                <p>Express</p>
                <p>React</p>
                <p>Node.js</p>
                <Link to="/contact" className="btn">Placeholder</Link>
            </div>
        </div>
    </div>
  )
}

export default FirstCard