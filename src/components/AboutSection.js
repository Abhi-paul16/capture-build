import React from "react";
import home1 from "../img/home1.png";
// Styled Component
import styled from "styled-components";

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


const About = styled.div`
min-height: 90vh;
display: flex;
align-items: center;
justify-content: space-between;
padding: 5rem;
color: white;
`

const Discription = styled.div`
flex: 1;
padding-right: 5rem;

h2{
    font-weight:lighter;
}
`

const Image = styled.div`
flex: 1;
overflow: hidden;
img{
    width: 100%;
    height: 80vh;
    object-fit: cover;
}
`

const Hide = styled.div`
overflow: hidden;
`

export default AboutSection;