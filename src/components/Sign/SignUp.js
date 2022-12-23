import React from 'react';
import styled from 'styled-components';
import LogoPage from '../Logo/LogoPage';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
    const [senha, setSenha] = useState("")
    const [email, setEmail] = useState("");
    const [confirmaSenha, setConfirmaSenha] = useState("");
    const [nome, setNome] = useState("");
    const [desabilitar, setDesabilitar] = useState(false);    
    const navigate = useNavigate();

    function signUp(e) {
        if(senha !== confirmaSenha){
            alert("As senhas devem ser iguais!")
            return;
        }
        setDesabilitar(true); 
        setSenha("");
        setEmail("");
        setConfirmaSenha("");    
        e.preventDefault();
        const requisicao = axios.post("https://api-shortly-sql-i1rh.onrender.com/signUp", { name: nome, email: email, password: senha, confirmPassword: confirmaSenha })
        requisicao.then(() => { alert("Cadastro realizado com sucesso!"); setDesabilitar(false)})
        requisicao.catch(() => { alert("Erro! Email inválido!"); setDesabilitar(false) })

    }
  return (
    <Geral> 
        <Sign>
            <Entrar onClick={() => navigate('/sign-in')}>Entrar</Entrar>
            <Cadastrar>Cadastrar</Cadastrar>
        </Sign>        
        <LogoPage/>
        <ContainerInput>
            <form onSubmit={signUp}>
                <InputName type="text" placeholder='Nome' value={nome} onChange={e => setNome(e.target.value)} required disabled={desabilitar}></InputName>
                <InputEmail type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required disabled={desabilitar}></InputEmail>
                <InputPassword type="password" placeholder='Senha' value={senha} onChange={e => setSenha(e.target.value)} disabled={desabilitar}></InputPassword>
                <InputConfirmPassword type="password" placeholder='Confirmar senha' value={confirmaSenha} onChange={e => setConfirmaSenha(e.target.value)} required></InputConfirmPassword>
                <SignUpButton>Criar conta</SignUpButton>
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
color: #9c9c9c;
margin-right: 1.4em;
cursor:pointer;
`
const Cadastrar = styled.p`
color: #5D9040;
margin-right: 11em;
cursor:pointer;

@media(max-width: 56.25em){
    margin-right: 3em;
}
`
const ContainerInput = styled.div`
text-align: center;
`
const InputName = styled.input`
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
const InputEmail = styled(InputName)`
`
const InputPassword = styled(InputName)`
`
const InputConfirmPassword = styled(InputName)`
`
const SignUpButton = styled.button`
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
export default SignUp