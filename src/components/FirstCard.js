import "./FirstCardStyles.css";
import React from 'react'
const FirstCard = () => {
  return (
    <div className="pricing">
        <div className="card-container">
            <div className="card">
                <h3>Tech Stack</h3>
                <span className="bar"></span>
                {/*<p className="btc">100</p>*/}
                <p>MySql</p>
                <p>Express</p>
                <p>HTML5, CSS, JS</p>
                <p>Node.js</p>
                <a href = "https://github.com/manorrington/G9-Redesign/tree/main/frontend/src/components" target="_blank" rel="noreferrer" className="btn">Repository</a>
            </div>
            <div className="card">
                <h3>Tech Stack</h3>
                <span className="bar"></span>
                {/*<p className="btc">100</p>*/}
                <p>MongoDB</p>
                <p>Express</p>
                <p>React</p>
                <p>Node.Js</p>
                <a href="https://github.com/Nothier96/hopehack-1" className="btn" rel="noreferrer">Repository</a>
            </div>
            <div className="card">
                <h3>Tech Stack</h3>
                <span className="bar"></span>
                {/*<p className="btc">100</p>*/}
                <p>MySql</p>
                <p>Express</p>
                <p>React</p>
                <p>Node.js</p>
                <a href = "https://github.com/GovernorBrown/Ecommerce2" className="btn" target="_blank" rel="noreferrer">Repository</a>
            </div>
        </div>
    </div>
  )
}

export default FirstCard