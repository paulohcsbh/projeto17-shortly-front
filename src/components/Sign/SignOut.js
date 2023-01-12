import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const SignOut = ({token, setEstado}) => {    
    const navigate = useNavigate();    
   function signOut() { 
        const promise = axios.delete("https://api-shortly-sql-i1rh.onrender.com/signOut", { headers: { "Authorization": `Bearer ${token}` }, })
        console.log(promise)
        promise.then((a) => {console.log(a);});
        promise.catch((err) => {console.log(err); alert("Alguma coisa deu errado!");});
        navigate("/")  
        setEstado(Math.random());
            
    }
  return (
    <>
        <Sair onClick={signOut}>Sair</Sair>    
    </>
  )
}
const Sair = styled.p`
color: #9c9c9c;
margin-right: 11em;
cursor:pointer;

@media(max-width: 56.25em){
    margin-right: 1em;
}
`
export default SignOut