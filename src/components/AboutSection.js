import React from "react";
import home1 from "../img/home1.png";
import { About, Discription , Hide , Image } from "../Styles";

const AboutSection = ()=>   {
    return(
    <About>
    
    <Discription>
    <div className="title">
        <Hide>
            <h2>We work to make</h2>
            </Hide>
    
            <Hide>
            <h2>your <span>Dreams</span> come </h2>
            </Hide>

            <Hide>
            <h2>true.</h2>
            </Hide>
    </div>

    <p>Contact us for any photography and videography ideas that you have.
        We have Professionals with amazing skills to help to achieve it.
    </p>
    <button>Contact us</button>
    </Discription>

<Image>
    <img src={home1} alt="" />
</Image>

    </About>
    )
}



export default AboutSection;