import React, { useState, useEffect, useRef } from "react";
import styled from 'styled-components'
import CallMadeIcon from '@material-ui/icons/CallMade';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import AttachFileIcon from '@material-ui/icons/AttachFile';

const Landing = () => {
    return (
    <Container>
        <div className="main-content glass">
            <div className="logo-x-dp">
                <img src="https://media.licdn.com/dms/image/v2/D5603AQHc7m2ahjLvsQ/profile-displayphoto-shrink_800_800/B56ZSi9EoCHEAc-/0/1737900706914?e=1743638400&v=beta&t=ts0xpBGygsHZo2VS_B2v3vASU6izmlJ01yu3_wIQZv4" alt="" />
            </div>
            <div className="name">Atanu Nayak</div>
            <div className="about-header">Final Year computer science student @Jadavpur University</div>
            <div className="about-desc">Hello, I'm Atanu Nayak, a software developer from India. I had the opportunity to intern with Samsung R&D during the summer of 2024.</div>

            <div className="main-btns">
                <div className="btn-1 trans glass">30K page views</div>
                <div className="btn-1">Follow</div>
            </div>

            <div className="group">
                <div className="group-name-container">
                    <div className="group-name-container-line"></div>
                    <div className="group-name">Ask Ananously</div>
                    <div className="group-name-container-line"></div>
                </div>
                <div className="link1">Views about my Instagram profile?</div>
                <div className="link1">Confess something</div>
            </div>

            <div className="group">
                <div className="group-name-container">
                    <div className="group-name-container-line"></div>
                    <div className="group-name">Connect with me</div>
                    <div className="group-name-container-line"></div>
                </div>
                <div className="link1">Email</div>
                <div className="link1">Linkedin</div>
                <div className="link1">Instragram</div>
                <div className="link1">Whatsapp</div>
            </div>

            <div className="group">
                <div className="group-name-container">
                    <div className="group-name-container-line"></div>
                    <div className="group-name">Current Playlist</div>
                    <div className="group-name-container-line"></div>
                </div>
                <iframe src="https://open.spotify.com/embed/playlist/4LzYe8vJ0b38h2bh6iorgv?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>

            <div className="group">
                <div className="group-name-container">
                    <div className="group-name-container-line"></div>
                    <div className="group-name">Play with me</div>
                    <div className="group-name-container-line"></div>
                </div>
                <div className="link-2">
                    <img src="https://staticg.sportskeeda.com/editor/2023/03/112d7-16781866130065-1920.jpg" alt="" />
                    {/* <div className="tags">
                        <div className="price">₹ 1299.99</div>
                        <div className="tag">Best seller</div>
                    </div> */}
                    <div className="title">
                        Join my clan (TH-10 n above)
                    </div>
                    <div className="buy-btn">Join</div>
                </div>
            </div>
        </div>
        {/* <div className="join-us"></div> */}
    </Container>
  )
}

export default Landing

const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    /* background-color: #333; */
    /* background-image: url('https://media0.giphy.com/media/4IlgE2iRukYIMbZsJZ/200w.gif?cid=82a1493bkue5enzruga0dznx3jz7dllsooyi1zkknv6pn3kp&ep=v1_gifs_related&rid=200w.gif&ct=g'); */
    background-image: url('https://media1.giphy.com/media/tNt8ZSSrwNHzQcPABV/200w.gif?cid=82a1493bqjkhddxjr340tneezzrwuqsy9ld4pmddvavjwlip&ep=v1_gifs_related&rid=200w.gif&ct=g');
    /* background-image: url('https://www.shutterstock.com/shutterstock/videos/1104721753/thumb/1.jpg?ip=x480'); */
    
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

        .logo-x-dp{
            height: 120px;
            aspect-ratio: 1/1;
            overflow: hidden;
            border-radius: 50%;

            img{
                width: 100%;
            }
        }

        .name{
            margin-top: 20px;
            font-weight: 500;
            text-align: center;
        }

        .about-header{
            margin-top: 10px;
            font-weight: 500;
            font-size: 0.85rem;
            text-align: center;
        }

        .about-desc{
            margin-top: 5px;
            font-weight: 200;
            font-size: 0.85rem;
            text-align: center;
        }

        .main-btns{
            margin-top: 30px;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;

            .btn-1{
                font-size: 0.85rem;
                padding: 10px 15px;
                background-color: #363636;
                border-radius: 10px;
                margin: 0 5px;
            }

            .trans{
                background-color: transparent;
            }
        }

        .socials{
            margin-top: 30px;
            display: flex; 
            align-items: center; 
            justify-content: center;
            flex-wrap: wrap;

            .social-icon{
                height: 45px;
                aspect-ratio: 1/1;
                background-color: #363636;
                border-radius: 50%;
                margin: 2.5px;

                padding: 2.5px;

                img{
                    width: 100%;
                    border-radius: 100px;
                }
            }
        }

        .group{
            width: 100%;

            .group-name-container{
                margin: 30px 0;
                padding: 0 35px;

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
                    background-color: #676363;
                    flex: 1;
                }
            }

            .link1{
                background-color: #f5f5f5;
                font-size: 0.85rem;
                font-weight: 500;
                text-align: center;
                padding: 15px 30px;
                border-radius: 100px;
                color: #333;
                margin-bottom: 5px;

                display: flex; 
                align-items: center;
                justify-content: center;

                height: 60px;
            }

            .link-2{
                background-color: #f5f5f5;
                
                padding: 30px;
                border-radius: 30px;
                color: #333;
                margin-bottom: 5px;
                margin-top: 30px;

                display: flex; 
                align-items: center;
                flex-direction: column;

                img{
                    width: 100%;
                    border-radius: 30px;
                }

                .tags{
                    margin-top: 10px;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;

                    .price{
                        background-color: yellowgreen;
                        font-size: 0.85rem;
                        color: #333;
                        font-weight: 600;
                        padding: 5px 10px;
                        border-radius: 100px;
                        margin-right: 5px;
                    }
                    
                    .tag{
                        background-color: pink;
                        font-size: 0.85rem;
                        color: #333;
                        font-weight: 600;
                        padding: 5px 10px;
                        border-radius: 100px;
                        margin-right: 5px;
                    }
                }

                .title{
                    color: #333;
                    font-size: 0.85rem;
                    font-weight: 600;
                    margin-top: 10px;
                    width: 100%;
                }

                .buy-btn{
                    margin-top: 10px;
                    background-color: yellowgreen;
                    font-size: 0.85rem;
                    color: #333;
                    font-weight: 600;
                    padding: 15px 15px;
                    width: 100%;
                    border-radius: 30px;
                    text-align: center;
                }
            }
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