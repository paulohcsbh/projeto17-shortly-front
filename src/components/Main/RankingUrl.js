import React from 'react'
import styled from 'styled-components'


const RankingUrl = ({index, rank}) => {
  
  return (
    <Container>
        <Rankings>
            <IndexName>{index + 1}. {rank.name} - </IndexName> 
            <Counts> {rank.linksCount} links - {rank.visitCount} visualizações</Counts>
        </Rankings>
    </Container>
  )
}

const Container = styled.div`
width: 100%;
padding: 2.5em 1.5em 1em 1.5em;
`
const Rankings = styled.div`
display: flex;
`
const IndexName = styled.div`
font-size: 1.2em;
font-weight: 700;
font-family: 'Lexend Deca', sans-serif;
@media(min-height: 50.65em){
  font-size: .8em;
}
`
const Counts = styled.div`
font-size: 1.2em;
font-weight: 500;
font-family: 'Lexend Deca', sans-serif;
padding-left: .2em;
@media(min-height: 50.65em){
  font-size: .8em;
}
`

export default RankingUrl