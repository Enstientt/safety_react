import styled from 'styled-components'
import {Link as LinkS} from 'react-scroll';

export const GlobalStyle=styled.div`
box-sizing: border-box;
`
export const Container=styled.div`
background-image: url(https://images.unsplash.com/photo-1502920514313-52581002a659?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=867&q=80);
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
font-family: 'Montserrat', sans-serif;
height: 100%;
margin: -15px 1 50px;
padding:30px;
opacity:${({isOpen})=>(isOpen?'100%':'0')};
top:${({isOpen})=>isOpen ?'0':'-100%'};
opacity:0.95;
`
export const InputSection=styled.div`
margin: 15%;
display:flex;
flex-direction: column;
margin:10%;

`
export const H1t=styled.h1`
font-weight: bold;
border:1px;
text-align: center;
opacity:0.5;
margin: 10%;
`
export const H2t=styled.h2`
text-align:center;
background-color: greenyellow;
background-color: #F0FFF0;
`
export const Pelem=styled.p`
font-size: 14px;
font-weight: 100;
line-height: 20px;
letter-spacing: 0.5px;
margin: 20px 0 30px;
`
export const Span=styled.span`
text-decoration: underline;
width: 100%;
margin:19%;
`
export const Alink=styled.a`
color: #333;
font-size: 14px;
text-decoration: none;
margin: 15px 0;
`
export const BottomSec=styled.div`
background-color: grey;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-bottom:50px;
padding: 1px;
`
export const ButtonN=styled.button`
border-radius: 20px;
border: 1px solid #FF4B2B;
background-color: #FF4B2B;
color: #FFFFFF;
font-size: 12px;
font-weight: bold;
padding: 12px 45px;
letter-spacing: 1px;
text-transform: uppercase;
transition: transform 80ms ease-in;
margin:0;
&:active{
    transform: scale(0.95);
}
&:focus{
    outline: none;
	
}
margin-bottom: 5px;
cursor:pointer;
`
export const FormP=styled.form`
background-color: #FFFFFF;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 0 50px;
height: 100%;
text-align: center;
`
export const InputUser=styled.input`
background-color: #eee;
position: relative;
border-radius:10px;
border:solid;
padding: 12px 12px;
margin:2%;
width: 90%;
`
export const ContainerC=styled.div`
border-radius: 10px;
background-color:#808080;
box-shadow: 0 14px 28px rgba(0,0,0,0.25), 
			0 10px 10px rgba(0,0,0,0.22);
position: relative;
overflow: hidden;
width: 500px;
height:100%;
max-width: 100%;
min-height: 100%;
margin-top:0;
padding: auto;
opacity:0.85;
z-index: 1000;
@media (max-width: 748px){
    width: 100vw;
    height: 100vw;
}
`
export const Footer=styled.footer`
background-color: #222;
color: #fff;
font-size: 14px;
bottom: 0;
position: fixed;
left: 0;
right: 0;
text-align: center;
z-index: 999;
`
export const Asec=styled(LinkS)`
text-decoration: underline;
align-items: center;
cursor: pointer;
`