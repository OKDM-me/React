import React, { useState, useEffect, useRef } from "react";
import styled from 'styled-components';

const VoteAnswer = () => {
  return (
    <Container>
      <div className="main-content glass">
        <div className="title">What are your honest thoughts on my Instagram profile?</div>
        <div className="desc">
          I'm trying to improve my personal brand. Feel free to give feedback on the vibe, content, or overall look. Be honest!
        </div>
        <div className="vote-options">
            <div className="vote-option">
                <div className="img-holder"><img src="https://akns-images.eonline.com/eol_images/Entire_Site/2025030/rs_1200x1200-250130080312-you2.jpg?fit=around%7C1200:1200&output-quality=90&crop=1200:1200;center,top" alt="" /></div>
                <div className="name">Joe Goldberg - You Netflix Series</div>
                <div className="current-votes">52%</div>
                <div className="inc-vote"></div>
            </div>
        </div>
      </div>
    </Container>
  )
}

export default VoteAnswer

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
        /* min-height: calc(100vh - 150px); */
        border-radius: 30px;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;

        padding: 35px;

        .title{
            font-size: 1.25rem;
            margin-bottom: 10px;
            
        }

        .desc{
            margin-bottom: 10px;
            font-weight: 300;
            font-size: 0.9rem;
            color: #eae0e0;
        }

        .vote-options{
            display: flex;
            flex-wrap: wrap;
            
            .vote-option{
                width: calc(50% - 10px);
                padding: 10px;
                background-color: white;

                .img-holder{
                    position: relative;
                    width: 100%;
                    aspect-ratio: 1/1;
                    overflow: hidden;
                    display: grid;
                    place-items: center;
                    border-radius: 30px;

                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
    }

    .group-name-container{
        margin: 30px 0;
        padding: 0 35px;

        width: 100%;

        display: flex;
        align-items: center;
        justify-content: center;

        .group-name{
            font-size: 0.85rem;
            margin: 0 10px;
        }

        .group-name-container-line{
            height: 3px;
            border-radius: 100px;
            background-color:rgb(213, 209, 209);
            flex: 1;
        }
    }

    .glass {
        background: rgba(255, 255, 255, 0.2); /* Transparent white */
        border-radius: 16px; /* Rounded corners */
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); /* Soft shadow */
        backdrop-filter: blur(10px); /* Background blur effect */
        -webkit-backdrop-filter: blur(10px); /* For Safari support */
        border: 1px solid rgba(255, 255, 255, 0.3); /* Light border for glass effect */
    }

    .join-us{
        width: calc(100vw - 60px);
        max-width: 450px;
        background-color: whitesmoke;
        border-radius: 30px;
        height: 60px;
        margin-top: 30px;
    }
`