import React,{useEffect, useState} from "react"
import styled from "styled-components"
import Home from "./home"




interface page {
    title: string,
    logo: any,
    vis: boolean,
    stack: boolean
}


const Nav = ()=>{



    const [homeVis, setHomeVis] = useState (true);
    const [menuVis, setMenuVis] = useState(true)
    const [chartVis, setChartVis] = useState(true)
    const [entriesVis, setEntriesVis] = useState(false)

const NavCont = styled.div`
position: fixed;
z-index: 3;
height: 30%;
width: 4vw;
border-radius: 0 20px  20px 0;
color:white;
text-align: center;
padding: 10px;
background-color: rgba(255, 255, 255, .15);
  
  backdrop-filter: blur(5px);pointer-events:none;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .2); 

margin-top: 19vh;
`
const NavContFixed = styled.div`
position: fixed;
z-index: 2;
height: 75%;
width: 5vw;
color:white;
text-align: center;
padding: 10px 10px 10px 0 px;
margin-top: 12.5vh;
left:0;


`
const NavLogo = styled.img`
max-width:100%;
background: transparent;
width: 100%;
margin: 15px 0; 
`
  


      useEffect(()=>{

        document.getElementById("fixed")!.addEventListener("mouseover", function( event ) {
            event.preventDefault();

            setMenuVis(true)
        });
        document.getElementById("fixed")!.addEventListener("mouseleave", function( event ) {
            event.preventDefault();
            setMenuVis(false)
        });

      })
     


    return(
        <div className="master container-fluid">
        
       
        <NavContFixed id="fixed">
 {menuVis && (
                <NavCont>
                    {/* <NavLogo className="navLogo" src={}  style={{pointerEvents:"auto"}} onClick={(e)=> {e.stopPropagation(); chartToggle()}}/>
                    <NavLogo className="navLogo" src={}  style={{pointerEvents:"auto"}} onClick={(e)=> {e.stopPropagation(); entriesToggle()}}/>
                    <NavLogo className="navLogo" src={}  style={{pointerEvents:"auto"}} onClick={(e)=> {e.stopPropagation(); console.log("test")}}/>
                     */}

                </NavCont>
                )}
        

        </NavContFixed>

   



{homeVis && 
    <div className="row">
      <Home></Home>
    </div>
}
  {/*
{entriesVis &&
    <div className='row'>

    </div>
   
 }         
 </div>
         */}
    </div>
    )
}


export default Nav;