import React from "react";
import styled, { keyframes } from "styled-components";
import {fadeIn} from "react-animations"


const fadeInAni = keyframes`${fadeIn}`;

const HomeDiv = styled.div`
animation: 1s ${fadeInAni};


`
// width: 300px;
// 	height: 40vh;
//     background-color: rgba(255, 255, 255, .15);
  
//     backdrop-filter: blur(5px);pointer-events:none;	margin: auto;
//     margin-top: 30vh;
//     box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
// 	border-radius: 6px;

const Zinger = styled.h1`
text-align: center;
margin-top:40vh;
color: rgba(255, 255, 255, .3);
font-size: 10rem;

`
const Home = ()=>{


    return(
        <HomeDiv>
            <Zinger>PEAC</Zinger>
        </HomeDiv>
    )
}

export default Home;