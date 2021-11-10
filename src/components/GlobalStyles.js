
import  { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding:0;
    box-sizing: border-box;
}

body{
    background: #1b1b1b;
}
button{
    font-weight: bold;
   font-size: 1.1rem;
   padding: 1rem 2rem;
    cursor: pointer;
    border: 3px solid #23d997;
    background: transparent;
    color: white;
    transition: all 0.5s ease; 

    &:hover{
background-color: #23d997; 
color: #000000;
}
}

h2{
    font-size: 4rem;
    font-weight: lighter;
}
h3{
    color: white;
}
h4{
    font-weight: bold;
}

a{
    font-size: 1.1.rem;
}

span{
    font-weight: bold;
    color: #23d997;  
}

p{
    padding: 3rem 0rem;
    color: #ccc;
    font-size: 1.4rem;
    line-height: 150%;
}

`

export default  GlobalStyles;