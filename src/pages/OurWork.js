import React from "react";
// styles
import styled from "styled-components";
//link
import { Link } from "react-router-dom";    
//Images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";

const OurWork = ()=>{
    return(
        <Work>
            <Movie>
                <h2>The Athlete</h2>
                <div className="line"></div>
                <Link to=''>
                <img src={athlete} alt="Athlete-img" />
                </Link>
            </Movie>
            <Movie>
                <h2>The Racer</h2>
                <div className="line"></div>
                <Link to='' > 
                <img src={theracer} alt="Racer-img" />
                </Link>
            </Movie>
            <Movie>
                <h2> Good Times</h2>
                <div className="line"></div>
                <Link to=''>
                <img src={goodtimes} alt="Goodtimes-img" />
                </Link>
        
            </Movie>
        </Work>
    )
}

const Work = styled.div`
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