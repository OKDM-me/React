import React, { useState, useEffect, useRef } from "react";
import styled from 'styled-components'

const GetAnswers1 = () => {
  return (
    <Container>
        <div className="main-content glass">
            
        </div>
    </Container>
  )
}

export default GetAnswers1

const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    /* background-color: #333; */
    /* background-image: url('https://media0.giphy.com/media/4IlgE2iRukYIMbZsJZ/200w.gif?cid=82a1493bkue5enzruga0dznx3jz7dllsooyi1zkknv6pn3kp&ep=v1_gifs_related&rid=200w.gif&ct=g'); */
    /* background-image: url('https://media4.giphy.com/media/YT4z922u0PlOHhoap2/200w.gif?cid=82a1493biu02p2az2bwfiwfoefie5fkywswq32j54a9hjslv&ep=v1_gifs_related&rid=200w.gif&ct=g'); */
    /* background-image: url('https://media3.giphy.com/media/L1X6XcN2oxS08VrquP/giphy.gif?cid=6c09b952kh7p7oq0fwgeyinqxeaeiykmyvxtlulyyg3cr6m4&ep=v1_gifs_search&rid=giphy.gif&ct=g'); */
    /* background-image: url('https://cdn.dribbble.com/users/2773311/screenshots/14473889/media/91fad3184d4d4c377c32cba06da2d0a1.gif'); */
    background-image: url('https://media1.giphy.com/media/tNt8ZSSrwNHzQcPABV/200w.gif?cid=82a1493bqjkhddxjr340tneezzrwuqsy9ld4pmddvavjwlip&ep=v1_gifs_related&rid=200w.gif&ct=g');
    
    /* background-size: cover; */
    /* background-repeat: no-repeat; */
    background-position: center;
    background-attachment: fixed;

    padding: 30px;

    display: flex;
    align-items: center;
    /* justify-content: center; */
    flex-direction: column;

    .main-content{
        width: calc(100vw - 60px);
        max-width: 450px;
        background-color: #3e3e3e;
        /* background: linear-gradient(135deg, #dfe9f3, #ffffff);  */
        min-height: calc(100vh - 150px);
        border-radius: 30px;

        display: flex;
        flex-direction: column;
        align-items: center;

        padding: 35px;
    }
`