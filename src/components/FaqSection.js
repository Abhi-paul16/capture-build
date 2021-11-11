import React from 'react'
import styled from 'styled-components';
import { About, Discription  } from "../Styles";

const FaqSection = ()=> {
    return (
        <Faq>
            <h2>Any questions? <span>FAQ</span></h2>
            <div className="question">
                <h4>How do i start</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, eos.</p>
                </div>
            </div>

            <div className="question">
                <h4>Daily Schedule</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, eos.</p>
                </div>
            </div>

            <div className="question">
                <h4>Different Payment Method</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, eos.</p>
                </div>
            </div>

            <div className="question">
                <h4>What Product do you offer/</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, eos.</p>
                </div>
            </div>
        </Faq>
    )
}


const Faq = styled(About)`
display : block ;

span{
display: block;
}
h2{
    padding-bottom:2rem;
font-weight: lighter ;
}
`

export default FaqSection;
