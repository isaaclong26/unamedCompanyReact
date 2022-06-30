import React from "react";
import styled, { keyframes } from "styled-components";
import {fadeIn} from "react-animations"


const fadeInAni = keyframes`${fadeIn}`;

const Container = styled.div`
background-color: orange;
height: 100px;

`

const Login = ()=>{


    return(
       <Container className="col-lg-4 mx-auto"></Container>
    )
}

export default Login;