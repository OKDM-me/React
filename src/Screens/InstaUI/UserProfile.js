import React, { useState, useEffect, useRef } from "react";
import styled from 'styled-components'
import CallMadeIcon from '@material-ui/icons/CallMade';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import AttachFileIcon from '@material-ui/icons/AttachFile';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import BarChartIcon from '@material-ui/icons/BarChart';
import ControlFooter from "../../Components/ControlFooter";
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import RoomIcon from '@material-ui/icons/Room';

import sampleDp from "../../Images/sampledp.png"

const UserProfile = () => {
    return (
        <Container>
            <div className="main-content">
                <div className="user-data">
                    <div className="logo-x-dp">
                        <img src={sampleDp} alt="" />
                    </div>
                    <div className="name">Atanu Nayak</div>
                    <div className="about-header">Final Year computer science student <br /> @Jadavpur University</div>
                    <div className="about-desc">I don't have an original personality I stole it from Shri Krishna 🦚🪈</div>
                    <div className="about-location"><RoomIcon /> Kolkata, India</div>

                    <div className="main-btns">
                        <div className="btn-1 trans">30K page views</div>
                        <div className="btn-1">Subscribe</div>
                    </div>

                    <div className="socials">
                        <div className="social-icon">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/2048px-Instagram_logo_2022.svg.png" alt="" />
                        </div>
                        <div className="social-icon">
                            <img src="https://www.svgrepo.com/show/416500/youtube-circle-logo.svg" alt="" />
                        </div>
                        <div className="social-icon">
                            <img src="https://cdn.pixabay.com/photo/2021/06/15/12/51/facebook-6338508_1280.png" alt="" />
                        </div>
                    </div>
                </div>

                <div className="group">
                    <div className="group-name-container">
                        <div className="group-name-container-line"></div>
                        <div className="group-name">Reply Anonymously</div>
                        <div className="group-name-container-line"></div>
                    </div>

                    <div className="link1">
                        Views about my Insta?
                        <div className="link-circle">
                            <ChevronRightIcon />
                        </div>
                    </div>
                    <div className="link1">
                        Heard something about me?
                        <div className="link-circle">
                            <ChevronRightIcon />
                        </div>
                    </div>
                </div>

                <div className="group">
                        <div className="group-name-container">
                            <div className="group-name-container-line"></div>
                            <div className="group-name">Important Links</div>
                            <div className="group-name-container-line"></div>
                        </div>
                        <div className="link1">
                            My professional side
                            <div className="link-circle">
                                <CallMadeIcon/>
                            </div>
                        </div>
                        <div className="link1">
                            Date me?
                            <div className="link-circle">
                                <CallMadeIcon/>
                            </div>
                        </div>
                        <div className="link1">
                            Anime Tracker List
                            <div className="link-circle">
                                <ChevronRightIcon/>
                            </div>
                        </div>
                        <div className="link1">
                            Public Bucket List
                            <div className="link-circle">
                                <ChevronRightIcon/>
                            </div>
                        </div>
                        <div className="link1">
                            Movie Personality I resonate the most
                            <div className="link-circle">
                                <BarChartIcon/>
                            </div>
                        </div>
                    </div>

                    <div className="group">
                        <div className="group-name-container">
                            <div className="group-name-container-line"></div>
                            <div className="group-name">🎬 Movie Reviews</div>
                            <div className="group-name-container-line"></div>
                        </div>
                        <div className="link-2">
                            <img
                                src="https://m.media-amazon.com/images/S/pv-target-images/c7fc75a423fc33698265a27fe446a41026f3c8642fd6c8706c43b897d2ffb3e6.jpg"
                                alt="Movie Thumbnail"
                            />
                            <div className="title">
                                My Personal Takes on Cinema 🍿
                            </div>
                            <div className="desc">
                                Honest, chaotic, sometimes deep reviews of movies I watch—ranging from cinematic masterpieces to “I can’t believe I sat through that.”
                            </div>
                            <div className="buy-btn">
                                Read My Reviews
                            </div>
                        </div>
                    </div>

                    <div className="group">
                        <div className="group-name-container">
                            <div className="group-name-container-line"></div>
                            <div className="group-name">Current Playlist</div>
                            <div className="group-name-container-line"></div>
                        </div>
                        <iframe src="https://open.spotify.com/embed/playlist/4LzYe8vJ0b38h2bh6iorgv?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    </div>
            </div>

            <ControlFooter />
        </Container>
    )
}

export default UserProfile

const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-color: #000;

    margin-bottom: 64px;

    /* padding-bottom: 100px; */

    /* background-size: cover; */
    /* background-repeat: no-repeat; */
    /* background-position: center; */
    /* background-attachment: fixed; */

    padding: 30px;

    display: flex;  
    flex-direction: column;
    align-items: center;

    .main-content{
        max-width: 500px;
    }

    .user-data{
        display: flex;
        flex-direction: column;
        align-items: center;

        margin-bottom: 40px;
        
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
                margin-top: 10px;
                font-weight: 200;
                font-size: 0.85rem;
                text-align: center;
            }

            .about-location{
                margin-top: 10px;
                font-weight: 500;
                font-size: 0.85rem;
                text-align: center;

                svg{
                    font-size: 1rem;
                    margin-bottom: -2px;
                }
            }

            .main-btns{
                margin-top: 30px;
                display: flex;
                justify-content: center;
                flex-wrap: wrap;

                .btn-1{
                    font-size: 0.85rem;
                    padding: 10px 15px;
                    background-color: #0095f6;
                    border-radius: 10px;
                    margin: 0 5px;
                }

                .secondary{
                    background-color: #363636;
                }

                .trans{
                    background-color: transparent;
                    border: 1px solid white;
                }
            }

            .socials{
                margin-top: 30px;
                display: flex; 
                align-items: center; 
                justify-content: center;
                flex-wrap: wrap;

                .social-icon{
                    height: 35px;
                    aspect-ratio: 1/1;
                    background-color:rgb(217, 211, 211);
                    border-radius: 50%;
                    margin: 2.5px;

                    padding: 2.5px;

                    img{
                        width: 100%;
                        border-radius: 100px;
                    }
                }
            }

        }
        
        .group{
            width: 100%;
            margin-top: 70px;

            .group-name-container{
                margin: 30px 0;
                padding: 0 35px;

                display: flex;
                align-items: center;
                justify-content: center;

                .group-name{
                    font-size: 0.85rem;
                    margin: 0 10px;
                    text-align: center;
                }

                .group-name-container-line{
                    min-width: 20px;
                    height: 3px;
                    border-radius: 100px;
                    background-color: #676363;
                    flex: 1;
                }
            }

            .link1{
                background-color: #363636;
                font-size: 0.75rem;
                font-weight: 500;
                text-align: center;
                padding: 15px 30px;
                border-radius: 100px;
                color: #e5e5e5;
                margin-bottom: 5px;

                display: flex; 
                align-items: center;
                justify-content: center;

                height: 60px;

                position: relative;

                .link-circle{
                    position: absolute;
                    height: 40px;
                    width: 40px;
                    border-radius: 50%;

                    background-color: #0095f6;
                    /* background-color: #3c4f5b; */

                    right: -10px;

                    display: grid;
                    place-items: center;

                    svg{
                        font-size: 1rem;
                        fill: #e5e5e5;
                    }
                }

            }

            .link-2{
                background-color: #363636;
                color: #e5e5e5;
                
                padding: 30px;
                border-radius: 30px;
                margin-bottom: 5px;
                margin-top: 30px;

                display: flex; 
                align-items: center;
                flex-direction: column;

                img{
                    width: 100%;
                    border-radius: 30px;
                }

                .img-btn-holder{
                    position: relative;
                    height: auto;
                    
                    .hold-sq-image{
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


                .image-btns{
                    position: absolute;
                    width: calc(100% + 30px);
                    display: flex;
                    justify-content: space-between;
                    top: calc(50% - 15px);
                    margin-left: -15px;
                    border-radius: 100px;

                    button{
                        height: 30px;
                        width: 30px;
                        border-radius: 100px;
                        border: 1px solid #e5e5e5;
                        background-color: white;
                        display: grid;
                        place-items: center;

                        svg{
                            fill: #333;
                        }
                    }
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
                    color: #e5e5e5;
                    font-size: 0.85rem;
                    font-weight: 600;
                    margin-top: 10px;
                    width: 100%;
                }

                .desc{
                    color: #e5e5e5;
                    font-size: 0.75rem;
                    font-weight: 300;
                    margin-top: 10px;
                    width: 100%;
                }

                .date{
                    color: #e5e5e5;
                    font-size: 0.65rem;
                    font-weight: 300;
                    margin-top: 10px;
                    width: 100%;
                    font-weight: 500;
                }

                .buy-btn{
                    margin-top: 20px;
                    /* background-color: yellowgreen; */
                    background-color: #3c4f5b;
                    font-size: 0.85rem;
                    color: #e5e5e5;
                    font-weight: 600;
                    padding: 15px 15px;
                    width: 100%;
                    border-radius: 30px;
                    text-align: center;
                }
            }
        }
`