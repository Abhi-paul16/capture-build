import React from "react";
import home1 from "../img/home1.png";
import { About, Discription , Hide , Image } from "../Styles";
import { motion } from "framer-motion";
import { titleAnim } from "../Animation";

const AboutSection = ()=>   {
    return(
    <About>
    
    <Discription>
    <div className="title">
        <Hide>
            <motion.h2 variants={titleAnim} initial="" >We work to make</motion.h2>
            </Hide>
    
            <Hide>
            <motion.h2 variants={titleAnim}>your <span>Dreams</span> come </motion.h2>
            </Hide>

            <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
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