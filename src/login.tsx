import React from "react";
import styled, { keyframes } from "styled-components";
import {fadeIn} from "react-animations"


const fadeInAni = keyframes`${fadeIn}`;

const Container = styled.div`
position: fixed;
pointer-events:auto;
@media (min-width: 768px){
    width: 50vw;
    margin-left: 25vw;
}

@media (min-width:  1000px){
    width: 30vw;
    margin-left: 35vw;
}
height: 50vh;
width: 75vw;
max-width:100%;

margin-left: 12.5vw;
margin-top: 25vh;
border-radius: 15px;
background-color: rgba(255, 255, 255, .15);
  
  backdrop-filter: blur(5px);pointer-events:none;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .2); 

`
const LoginBtn = styled.button`
    width: 100%;
    border: none;
    border-radius: 3px;
    color: white;
    pointer-events:auto;
    transition: "all 1.3s ease",
    Webkit-transition: "all 1.3s ease",
    Moz-transition:"all 1.3s ease"

`
const HomeDiv = styled.div`
width: 100vw;
height:100vh;

`

const TextField = styled.input`
width: 100%;
border: none;
pointer-events:auto;

`
interface LoginProps {
  color1: String,
  color2: String,
  step: Function 
}

const Login = (props: LoginProps)=>{

  var color1 = props.color1;
  var color2 = props.color2;
  var step = props.step;

    return(
       <Container >
   <div className="row">

<div className="col-lg-4">
    <TextField placeholder="Username" onChange={e => setUsername(e.target.value)}></TextField>
    <LoginBtn style={{backgroundColor: `#${color2}`}} onClick={function(){step()}}>sup</LoginBtn>


</div>

</div>
        
       </Container>
    )
}

export default Login;