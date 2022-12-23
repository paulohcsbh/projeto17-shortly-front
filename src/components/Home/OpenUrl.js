import axios from 'axios'
import React from 'react'
import styled from 'styled-components'
import { useEffect } from 'react'

const OpenUrl = ({url}) => {
    const openNow = url
    function openUrl(openNow){
        const promise = axios.get(`https://api-shortly-sql-i1rh.onrender.com/urls/open/${openNow.shortUrl}`)
        promise.then((resposta) => { console.log(resposta.data); })
        promise.catch(erro => { console.log(erro.response.data) })
        console.log(openNow.url)
        document.window.open(openNow.url, "_blank");
        
    }

  return (
   <>
    <ShortUrl href={openNow.url} target='_blank' onClick={() => openUrl(openNow)}>{url.shortUrl} </ShortUrl>
   </>
  )
}

const ShortUrl = styled.a`
cursor: pointer;
text-decoration: none;
color: #fff;
`
export default OpenUrl