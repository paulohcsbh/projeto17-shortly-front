import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import SignOut from '../Sign/SignOut'


const NavBarLog = ({token, location}) => {
    const navigate = useNavigate();
    
  return (
    <NavBar>
                <BoxNav><Saudacao>Seja bem-vindo(a), {location.state.data.name}</Saudacao></BoxNav>        
                <Home onClick={()=> navigate("/home")}>Home</Home>
                <Ranking>Ranking</Ranking>
                <SignOut token={token}/>
                </NavBar>
  )
}

const NavBar = styled.div`
height: 1em;
display: flex;
align-items: center;
font-family: 'Lexend Deca', sans-serif;
font-size: .8em;
`
const BoxNav = styled.div`
width: 80%;
`
const Saudacao = styled.p`
color: #9c9c9c;
margin: 0 .1em 0 15.5em;
color: #5D9040;
@media(max-width: 56.25em){
  margin: 0 .1em 0 1.4em;
}
`

const Home = styled.p`
color: #9c9c9c;
margin-right: 1.4em;
cursor:pointer;
`
const Ranking = styled.p`
color: #5D9040;
margin-right: 1.4em;
cursor:pointer;
`
export default NavBarLog