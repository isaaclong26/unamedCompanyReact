import React,{useState, useRef} from "react";
import styled, { keyframes } from "styled-components";
import {fadeIn} from "react-animations"
import Login from "./login"
const fadeInAni = keyframes`${fadeIn}`;


const HomeDiv = styled.div`
width: 100vw;
height:100vh;

`


const Home = ()=>{
const colors = ["264653", "2a9d8f", "e9c46a", "f4a261", "e76f51"]
const [colorI, setColorI]= useState(0)
const [color, setColor] = useState(colors[0]);
const [color2, setColor2] = useState(colors[1]);

const nextScene = ()=>{
    setColor(colors[colorI]);
    setColor2(colors[colorI +1 ])
    if(colorI < colors.length-1){
            setColorI(colorI + 1)

    }
    else{
        setColorI(0)
    }

}


    return(
        <HomeDiv style={
            {backgroundColor: `#${color}`,
            transition: "all 1.3s ease",
            WebkitTransition: "all 1.3s ease",
            MozTransition:"all 1.3s ease"   
            
            }}>
            <Login color1={color} color2={color2} step={nextScene} />
             
           

        </HomeDiv>
        
    )
    
}

export default Home;