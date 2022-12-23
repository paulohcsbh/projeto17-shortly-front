import React from 'react'
import styled from 'styled-components'
export const LogoPage = () => {
  
  return (
    <>    
        <ContainerLogo>
            <Logo >Shortly</Logo>
            <Imagem src='https://images.emojiterra.com/twitter/v14.0/128px/1fa73.png' alt="Bermuda"></Imagem>
        </ContainerLogo>
        </>
  )
}


const ContainerLogo = styled.div`
margin-top: 3em;
display: flex;
justify-content: center;
align-items: center;

`
const Logo = styled.h1`
font-family: 'Lexend Deca', sans-serif;
font-size: 4em;
font-weight: 200;
`
const Imagem = styled.img`
width: 6em;
`
export default LogoPage
