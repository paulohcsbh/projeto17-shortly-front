import React from 'react'
import styled from 'styled-components'
import axios from "axios";
import { useState } from "react";

const UrlShorten = ({token}) => {
    const [url, setUrl] = useState("");
    const [desabilitar, setDesabilitar] = useState(false);

    function urlShorten(e) {
        setDesabilitar(true);        
        e.preventDefault();
        const requisicao = axios.post("https://api-shortly-sql-i1rh.onrender.com/urls/shorten", { url: url }, { headers: { "Authorization": `Bearer ${token}` }, })
        requisicao.then((a) => {console.log(a);  setDesabilitar(false); setUrl("")});
        requisicao.catch(() => { alert("Alguma coisa deu errado!"); setDesabilitar(false) });        
    }

  return (
    <ContainerInput>
      <form onSubmit={urlShorten}>
          <InputLink type="text" placeholder='Links que cabem no bolso' value={url} onChange={e => setUrl(e.target.value)} required disabled={desabilitar}></InputLink>
          <ButtonLink type='submit'>Encurtar link</ButtonLink>
      </form>
    </ContainerInput>
  )
}

const ContainerInput = styled.div`
text-align: center;
`
const InputLink = styled.input`
width: 54%;
height: 3em;
margin-top: 1.6em;
border: none;
border-radius: .4em;
padding-left: .7em;
font-family: 'Lexend Deca', sans-serif;
opacity: .4;
@media(max-width: 56.25em){
    width: 55%;
}
`
const ButtonLink = styled.button`
width: 12%;
height: 3em;
font-size: .8em;
color: #fff;
background-color: #5D9040;
font-family: 'Lexend Deca', sans-serif;
margin-left: 4em;
border-radius: .8em;
border: none;
cursor: pointer;
@media(max-width: 56.25em){
  margin-left: 2em;
    width: 30%;
}
`
export default UrlShorten