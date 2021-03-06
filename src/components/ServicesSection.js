import React from 'react'

import clock from "../img/clock.svg";
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';
//Styled components

import styled from 'styled-components';
import { About, Discription  , Image } from "../Styles";

const ServicesSection = () => {
    return (
        <Services>

        <Discription>
            <h2>High <span>Quality</span> Services </h2>

        <Cards>
            
            <Card>
                <div className="icon">
                 <img src={clock} alt="clock" />
                 <h3>Efficient</h3>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
            </Card>

            <Card>
                <div className="icon">
                 <img src={diaphragm} alt="diaphragm" />
                 <h3>Diaphragm</h3>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
            </Card>

            <Card>
                <div className="icon">
                 <img src={money} alt="clock" />
                 <h3> Affordable </h3>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
            </Card>

            <Card>
                <div className="icon">
                 <img src={teamwork} alt="teamwork" />
                 <h3>Teamwork</h3>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
            </Card>

        </Cards>
        </Discription>
               <Image>
                   <img src={home2} alt="home" />
               </Image>
          </Services>
    )
}


const Services = styled(About)`

h2{
    font-size: 2rem;
    padding-bottom: 4rem ;
}
p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
    
  }
`;
const Cards = styled.div`
display: flex;
flex-wrap: wrap;
`
const Card = styled.div`
/* flex-basis: 20rem; */
.icon{
    display: flex;
    align-items: center;
}
h3{
    margin-left: 1rem;
    padding: 1rem;
    background: white;
    color: black;
    font-size:1.2rem;
}
`

export default ServicesSection;