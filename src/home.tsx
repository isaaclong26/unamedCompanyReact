import React from "react";
import styled, { keyframes } from "styled-components";
import {fadeIn} from "react-animations"

import Login from "./login"
const fadeInAni = keyframes`${fadeIn}`;

const HomeDiv = styled.div`




`
const Page1 = styled.div`
background: linear-gradient(to top, #0077B6, #caf0f8);

`
const Page2 = styled.div`
background: linear-gradient(180deg, hsla(201, 100%, 36%, 1) 0%, hsla(235, 100%, 12%, 1) 100%);

`
const Page3 = styled.div`
background: linear-gradient(180deg, hsla(235, 100%, 12%, 1) 0%, hsla(0, 0%, 0%, 1) 100%);

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
            <Page1 className="page container">
                <div className="row">

                    <Login></Login>

                </div>
            </Page1>

            <Page2 className="page">

            </Page2>

            <Page3 className="page">

            </Page3>
        </HomeDiv>
    )
}

export default Home;