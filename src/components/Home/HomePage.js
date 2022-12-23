import React from 'react';
import styled from 'styled-components';
import LogoPage from '../Logo/LogoPage';
import UrlPage from './UrlBox';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UrlShorten from './UrlShorten';
import SignOut from '../Sign/SignOut';

const HomePage = ({token}) => {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [estado, setEstado] = useState()

  useEffect(() => {
    const promise = axios.get("https://api-shortly-sql-i1rh.onrender.com/users/me", { headers: { "Authorization": `Bearer ${token}` }, })
    promise.then((resposta) => { setData(resposta.data); })
    promise.catch(erro => { console.log(erro.response.data) })

}, [data, estado, token])

if (data === undefined) {
    return "Carregando..."
}

  return (
    <Geral>
    <NavBar>
        <Box><Saudacao>Seja bem-vindo(a), {data.name}</Saudacao></Box>        
        <Home onClick={()=> navigate("/home")}>Home</Home>
        <Ranking onClick={()=> navigate("/", {state:{token: token,data:data}})}>Ranking</Ranking>
        <SignOut token={token}/>
    </NavBar>
    <LogoPage/>
    <UrlShorten token={token}/>
    <ContainerUrls>
    {data.shortenedUrls.map((url, index) => <UrlPage key={index} url={url} index={index} setEstado={setEstado} token={token}></UrlPage>)} 
    </ContainerUrls>
    
    </Geral>
  )
}

const Geral = styled.div`
min-height: 100vh;
background-color: #e5e5e5;
padding-top: 3.75em;
@media(min-height: 50.65em){
    height: 100vh;
}
`
const NavBar = styled.div`
height: 1em;
display: flex;
align-items: center;
font-family: 'Lexend Deca', sans-serif;
font-size: .8em;
`
const Box = styled.div`
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
color: #5D9040;
margin-right: 1.4em;
cursor:pointer;
`
const Ranking = styled.p`
color: #9c9c9c;
margin-right: 1.4em;
cursor:pointer;
`
const ContainerUrls = styled.div`
width: 100%;
height: 1em;
margin: 4em auto;
`
export default HomePage