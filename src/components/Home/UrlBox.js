import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import OpenUrl from './OpenUrl'

const UrlPage = ({url, setEstado, token}) => {
    function deletar(id) {
        if (window.confirm("Deletar Url?")) {
            const del = axios.delete(`https://api-shortly-sql-i1rh.onrender.com/urls/${id}`, { headers: { "Authorization": `Bearer ${token}` }, })
            del.then(() => { setEstado(Math.random())})
            del.catch(erro => { console.log(erro.response.data) })            
        }        
    }
   
  return (
    <Geral>
        <Container>
                <Box>
                    <UrlName>{url.url}</UrlName>
                    <OpenUrl url={url}/>
                    <VisitCount>Quantidade de visitantes: {url.visitCount} </VisitCount>
                </Box>
                <Lixo><ion-icon name="trash-sharp" style={{cursor: "pointer"}} onClick={() => deletar(url.id)}></ion-icon></Lixo>
            </Container>                
        </Geral>
  )
}
const Geral = styled.div`
width: 100%;
background-color: #e5e5e5;
padding-bottom: 2em;
`
const Container = styled.div`
width: 70%;
display: flex;
justify-content: space-between;
align-items: center;
margin: 0 auto 1em auto;
height: 3em;
background-color: #80CC74;
padding: 0 0 0 1.3em;
border-radius: .4em;
font-family: 'Lexend Deca', sans-serif;
font-size: .8em;
color: #fff;
font-weight: 400;
@media(max-width: 56.25em){
    width: 85%;        
}
`
const Box = styled.div`
width: 90%;
display: flex;
justify-content: space-between;
align-items: center;

@media(max-width: 56.25em){
    display: block;    
}
`
const UrlName = styled.p`
`

const VisitCount = styled.p`

`
const Lixo = styled.div`
width: 4em;
height: 3em;
display: flex;
justify-content: center;
align-items: center;
background-color: #fff;
color: red;
border-radius: 0 .4em .4em 0;
` 



export default UrlPage