import React from "react";
// styles
import styled from "styled-components";
//link
import { Link } from "react-router-dom";    
//Images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";


//Animation 
import { motion } from 'framer-motion';
import {pageAnimation} from '../Animation';

const OurWork = ()=>{
    return(
        <Work variants={pageAnimation} initial="hidden" animate = "show" exit="exit" >
            <Movie>
                <h2>The Athlete</h2>
                <div className="line"></div>
                <Link to='/work/the-athlete'>
                <img src={athlete} alt="Athlete-img" />
                </Link>
            </Movie>
            <Movie>
                <h2>The Racer</h2>
                <div className="line"></div>
                <Link to='work/the-racer' > 
                <img src={theracer} alt="Racer-img" />
                </Link>
            </Movie>
            <Movie>
                <h2> Good Times</h2>
                <div className="line"></div>
                <Link to='/work/good-times'>
                <img src={goodtimes} alt="Goodtimes-img" />
                </Link>
        
            </Movie>
        </Work>
    )
}

const Work = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem ;
    h2{
        padding: 1rem 0rem;
    }
`;

const Movie = styled.div`
    margin-bottom: 3rem;
    .line{
        height: 0.3rem;
        background: #cccccc;
        margin-bottom: 3rem;
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;


export default OurWork;