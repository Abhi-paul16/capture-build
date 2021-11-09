import React from "react";
import home1 from "../img/home1.png";


const AboutSection = ()=>   {
    return(
    <div>
    
    <div className="discription">
    <div className="title">
        <div className="hide">
            <h2>We work to make</h2>
            </div>
    
            <div className="hide">
            <h2>your <span>Dreams</span> come </h2>
            </div>

            <div className="hide">
            <h2>true.</h2>
            </div>
    </div>

    <p>contact us for any photography and videography ideas that you have.
        We have professionals with amazing skills to help to achieve it.
    </p>
    <button>Contact us</button>
    </div>

<div>
    <img src={home1} alt="" />
</div>

    </div>
    )
}

export default AboutSection;