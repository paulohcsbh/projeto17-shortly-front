import React from 'react'
import styled from 'styled-components'
import LogoPage from '../Logo/LogoPage'
import axios from "axios";
import { useState, useEffect } from 'react';
import RankingUrl from './RankingUrl';
import { useNavigate, useLocation } from "react-router-dom";
import NavBarLog from './NavBarLog';
import {ThreeDots} from "react-loader-spinner"

const Main = () => { 
    const token = localStorage.getItem("token");   
    const [ranking, setRanking] = useState();
    const [estado, setEstado] = useState();
    const navigate = useNavigate();  
    const location = useLocation(); 
    
    useEffect(() => {        
        const promise = axios.get("https://api-shortly-sql-i1rh.onrender.com/ranking")
        promise.then((resposta) => { setRanking(resposta.data); })
        promise.catch(erro => { console.log(erro.response.data) })
    }, [estado, ranking])

    if (ranking === undefined) {
        return (
            <Loading>
                <ThreeDots
                    height="80"
                    width="80"
                    radius="9"
                    color="#78B159"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                />
            </Loading>
        ) 
    }

    return (
        <Geral>            
                {!location.state ?
                 <Sign>
                    <Entrar onClick={() => navigate('/sign-in')}>Entrar</Entrar>
                    <Cadastrar onClick={() => navigate('/sign-up')}>Cadastrar</Cadastrar>
                </Sign> :
                <NavBarLog location={location} token={token} setEstado={setEstado}/>            
                }          
            <LogoPage />
            <TextRanking>
                🏆 Ranking
            </TextRanking>
            <RankingContainer>
                <Box>
                    {ranking.map((rank, index) => <RankingUrl key={index} rank={rank} index={index} ></RankingUrl>)}
                </Box>
            </RankingContainer>
            <Cadastro>
                {location.state ? <ButtonCadastrar></ButtonCadastrar> : <ButtonCadastrar onClick={() => navigate('/sign-up')}>Crie sua conta para usar nosso serviço!</ButtonCadastrar>}
            </Cadastro>

        </Geral>
    )
}

const Geral = styled.div`
background-color: #e5e5e5;
padding-top: 3.75em;
@media(min-height: 50.65em){
    height: 100vh;
}
`
const Sign = styled.div`
height: 1em;
display: flex;
justify-content: right;
align-items: center;
font-family: 'Lexend Deca', sans-serif;
font-size: .8em;
`
const Entrar = styled.p`
color: #9c9c9c;
margin-right: 1.4em;
cursor:pointer;
`
const Cadastrar = styled.p`
color: #9c9c9c;
margin-right: 11em;
cursor:pointer;

@media(max-width: 56.25em){
    margin-right: 3em;
}
`
const TextRanking = styled.p`
margin: 2em 0;
font-size: 2em;
font-weight: 700;
font-family: 'Lexend Deca', sans-serif;
text-align: center;
`
const RankingContainer = styled.div`
display: flex;
justify-content: center;
`
const Box = styled.div`
width: 80vw;
height: 15em;
border: 1px solid rgba(120, 177, 89, 0.25);
background-color: #fff;
border-radius: 1em 1em 0 0;
overflow-y: scroll;
`
const Cadastro = styled.div`
display: flex;
justify-content: center;
`

const ButtonCadastrar = styled.div`
font-family: 'Lexend Deca', sans-serif;
border: none;
font-weight: 700;
font-size: 2em;
margin: 3em 0;
cursor: pointer;
background-color: #e5e5e5;
@media(max-width: 56.25em){
   text-align: center;    
}
`
const Loading = styled.div`
height: 42em;
display: flex;
justify-content: center;
align-items: center;
`


export default Main

