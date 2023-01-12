import React from 'react';
import styled from 'styled-components';
import LogoPage from '../Logo/LogoPage';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useState } from "react";

const SignIn = () => {    
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [desabilitar, setDesabilitar] = useState(false);
    
    function signIn(e) {
        setDesabilitar(true);        
        e.preventDefault();
        const requisicao = axios.post("https://api-shortly-sql-i1rh.onrender.com/signIn", { email: email, password: senha })
        requisicao.then((a) => { navigate("/home"); console.log(a); localStorage.setItem("token", a.data.token); console.log(a) });
        requisicao.catch(() => { alert("Email e/ou senha inválidos"); setDesabilitar(false) });        
    }

    return (
        <Geral>
            <Sign>
                <Entrar>Entrar</Entrar>
                <Cadastrar onClick={() => navigate('/sign-up')}>Cadastrar</Cadastrar>
            </Sign>
            <LogoPage />
            <ContainerInput>
                <form onSubmit={signIn}>
                    <InputEmail type="email" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} required disabled={desabilitar}></InputEmail>
                    <InputPassword type="password" placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)} required disabled={desabilitar}></InputPassword>
                    <SignInButton type='submit'>Entrar</SignInButton>
                </form>
            </ContainerInput>
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
const Sign = styled.div`
height: 1em;
display: flex;
justify-content: right;
align-items: center;
font-family: 'Lexend Deca', sans-serif;
font-size: .8em;
`
const Entrar = styled.p`
color: #5D9040;
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
const ContainerInput = styled.div`
text-align: center;
`
const InputEmail = styled.input`
width: 60%;
height: 3em;
margin-top: 1.6em;
border: none;
border-radius: .4em;
padding-left: .7em;
font-family: 'Lexend Deca', sans-serif;
opacity: .4;
@media(max-width: 56.25em){
    width: 90%;
}
`
const InputPassword = styled(InputEmail)`
`
const SignInButton = styled.button`
width: 12%;
height: 4em;
font-size: .8em;
color: #fff;
display: block;
background-color: #5D9040;
font-family: 'Lexend Deca', sans-serif;
margin: 4em auto;
border-radius: .8em;
border: none;
cursor: pointer;
@media(max-width: 56.25em){
    width: 40%;
}
`
export default SignIn