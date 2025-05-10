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
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import RoomIcon from '@material-ui/icons/Room';

import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

import influencerdp from "../../Images/influencerdp.png"
import influencerproduct1 from "../../Images/influencerproduct1.png"
import influencerproduct2 from "../../Images/influencerproduct2.png"
import influencerproduct3 from "../../Images/influencerproduct3.png"
import influencerproduct4 from "../../Images/influencerproduct4.png"
import influencerproduct5 from "../../Images/influencerproduct5.png"
import influencerproduct6 from "../../Images/influencerproduct6.png"

import WhatsAppIcon from '@material-ui/icons/WhatsApp';

import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
        stars.push(<FaStar key={`full-${i}`} />);
    }
    if (hasHalfStar) {
        stars.push(<FaStarHalfAlt key="half" />);
    }
    while (stars.length < 5) {
        stars.push(<FaRegStar key={`empty-${stars.length}`} />);
    }
    return stars;
};

const Influencer = () => {
    const albumData = [
        {
            img: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Samsung_headquarters.jpg",
            title: "My workspace at Samsung Town – where the magic began ✨",
            date: "13 February, 2022"
        },
        {
            img: "https://img.staticmb.com/mbcontent/images/crop/uploads/2022/10/South-City-Mall-Kolkata-View-from-the-Top-Floor_0_1200.jpg",
            title: "Chilling at South City Mall – the weekend ritual 🛍️🍕",
            date: "21 June, 2023"
        },
        {
            img: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Jadavpur_University_Gate_No._4.jpg",
            title: "Throwback to my first day at Jadavpur University – butterflies and big dreams 🎓💭",
            date: "28 October, 2021"
        },
        {
            img: "https://i.ytimg.com/vi/cIxPS-B01Lg/maxresdefault.jpg",
            title: "Evening walks at Bagmane Tech Park – coding and calm vibes 🌇💻",
            date: "07 March, 2023"
        },
        {
            img: "https://media.istockphoto.com/id/184316397/photo/london-corporate-buildings.jpg?s=612x612&w=0&k=20&c=yLP6jM6vY8IEOnypm3NH7WE8Wr2u-mvtdao99rB1Ez4=",
            title: "Captured the golden hour from my hostel terrace – peace before deadlines 🌆📷",
            date: "04 September, 2022"
        }
    ];

    const [index, setIndex] = useState(0);

    const handleLeft = () => {
        setIndex((prevIndex) => (prevIndex - 1 + albumData.length) % albumData.length);
    };

    const handleRight = () => {
        setIndex((prevIndex) => (prevIndex + 1) % albumData.length);
    };

    const { img, title, date } = albumData[index];

    return (
        <Container>
            <div className="main-content">
                <Subscribe>
                    <NotificationsNoneOutlinedIcon />
                </Subscribe>
                <div className="user-data">
                    <div className="logo-x-dp">
                        <img src={influencerdp} alt="" />
                    </div>
                    <div className="name">Somya Kodan</div>
                    <div className="about-header">Content creator @instagram</div>
                    <div className="about-desc">Pout Like a Planet — Welcome to the Galaxy of Gorgeous!💋</div>
                    <div className="about-location"><RoomIcon /> India</div>

                    {/* <div className="main-btns">
                        <div className="btn-1 trans">30K page views</div>
                        <div className="btn-1">Subscribe</div>
                    </div> */}

                    <div className="socials">
                        <div className="social-icon">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/2048px-Instagram_logo_2022.svg.png" alt="" />
                        </div>
                        <div className="social-icon">
                            <img src="https://www.svgrepo.com/show/416500/youtube-circle-logo.svg" alt="" />
                        </div>
                        <div className="social-icon">
                            <img src="https://cdn2.downdetector.com/static/uploads/c/300/f52a5/image11.png" alt="" />
                        </div>
                        <div className="social-icon">
                            <img src="https://downloadr2.apkmirror.com/wp-content/uploads/2020/10/91/5f9b61e42640e.png" alt="" />
                        </div>
                    </div>
                </div>

                <RedorGreenFlag>
                    <div className="info">
                        72% votes for <b>red flag 🚩</b>
                    </div>
                    {/* <div className="vote-btn"><ArrowLeftIcon/></div> */}
                    <div className="vote-btn"><ArrowDropUpIcon /></div>
                    <div className="box">
                        <div className="left"></div>
                        {/* Green Flag 💚  */}
                        <div className="right">Red Flag 🚩</div>
                    </div>
                    <div className="vote-btn"><ArrowDropUpIcon /></div>
                    {/* <div className="vote-btn"><ArrowRightIcon/></div> */}
                </RedorGreenFlag>


                <div className="group">
                    <div className="group-name-container">
                        <div className="group-name-container-line"></div>
                        <div className="group-name">Brand Promotions</div>
                        <div className="group-name-container-line"></div>
                    </div>
                    <div className="link1">
                        <div>Shop all the <b>products I swear by</b></div>
                        <div className="link-circle">
                            <ChevronRightIcon />
                        </div>
                    </div>
                    <div className="link1">
                        <div><b>@newme.asia</b> code : “SOMY”</div>
                        <div className="link-circle">
                            <CallMadeIcon />
                        </div>
                    </div>
                    <div className="link1">
                        <div>Premium analog watches! <b>@hotgadget.store</b> 🛒</div>
                        <div className="link-circle">
                            <CallMadeIcon />
                        </div>
                    </div>
                    <div className="link1">
                        <div>My makeup suggestions <b>@nykaa</b></div>
                        <div className="link-circle">
                            <CallMadeIcon />
                        </div>
                    </div>
                    <div className="link1">
                        <div>In love with there phone cases <b>@casecreation</b> 🤭🎀</div>
                        <div className="link-circle">
                            <CallMadeIcon />
                        </div>
                    </div>
                </div>

                <div className="group">
                    <div className="group-name-container">
                        <div className="group-name-container-line"></div>
                        <div className="group-name">My Content</div>
                        <div className="group-name-container-line"></div>
                    </div>
                    <div className="link1">
                        <div>Most loved reel ❤️</div>
                        <div className="link-circle">
                            <CallMadeIcon />
                        </div>
                    </div>
                    <div className="link1">
                        <div><b>New vlog</b> - I watched my first IPL match - RCB 🔥</div>
                        <div className="link-circle">
                            <CallMadeIcon />
                        </div>
                    </div>
                    <div className="link1">
                        <div>Collab with me 🥹</div>
                        <div className="link-circle">
                            <ChevronRightIcon />
                        </div>
                    </div>
                </div>

                <div className="group">
                    <div className="group-name-container">
                        <div className="group-name-container-line"></div>
                        <div className="group-name">Recent Promotions</div>
                        <div className="group-name-container-line"></div>
                    </div>

                    <div className="shop-2">
                        <div className="link-2-shop">
                            <div className="border-bottom-light"></div>
                            <div className="left"><img src={influencerproduct1} alt="" /></div>
                            <div className="item-name">
                                T-shirt
                            </div>
                        </div>
                        <div className="link-2-shop">
                            <div className="border-bottom-light"></div>
                            <div className="left"><img src={influencerproduct2} alt="" /></div>
                            <div className="item-name">
                                Shine Lip Gloss
                            </div>
                        </div>
                        <div className="link-2-shop">
                            <div className="border-bottom-light"></div>
                            <div className="left"><img src={influencerproduct3} alt="" /></div>
                            <div className="item-name">
                                Watch
                            </div>
                        </div>
                        <div className="link-2-shop">
                            <div className="border-bottom-light"></div>
                            <div className="left"><img src={influencerproduct4} alt="" /></div>
                            <div className="item-name">
                                T-shirt
                            </div>
                        </div>
                        <div className="link-2-shop">
                            <div className="border-bottom-light"></div>
                            <div className="left"><img src={influencerproduct5} alt="" /></div>
                            <div className="item-name">
                                T-shirt
                            </div>
                        </div>
                        <div className="link-2-shop">
                            <div className="border-bottom-light"></div>
                            <div className="left"><img src={influencerproduct6} alt="" /></div>
                            <div className="item-name">
                                Phone Cover
                            </div>
                        </div>
                    </div>

                    <div className="view-all-btn">
                        <div className="btn-3">View all promotions</div>
                    </div>
                </div>

                <div className="share-my-page">
                    {/* igonel.ink/somyakodan_ */}
                </div>
            </div>

            <ControlFooter />
        </Container>
    )
}

export default Influencer

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
                border: 2px solid #313231;

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
            padding: 15px 60px;
            border-radius: 100px;
            color: #e5e5e5;
            margin-bottom: 5px;

            display: flex; 
            align-items: center;
            justify-content: center;

            height: 60px;

            position: relative;

            b{
                display: inline;
                margin-right: 5px;
            }

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

        .shop-2{
            width: 100%;
            display: flex;
            flex-wrap: wrap; 
            /* justify-content: space-between; */

            .link-2-shop{
                position: relative;
                /* padding-bottom: 140px; */
                width: calc(33.33% - 2.5px);
                aspect-ratio: 1/1;
                margin-bottom: 3.75px;
                /* background-color: #363636; */
                color: #e5e5e5;
                margin-right: 3.75px;
                
                /* border-radius: 10px; */
                /* margin-bottom: 1px; */
                /* margin-top: 30px; */

                display: flex; 
                flex-direction: column;
                align-items: flex-start;
                overflow: hidden;

                .border-bottom-light{
                    display: none;
                    position: absolute; 
                    height: 1px;
                    background-color:#313231;
                    bottom: -15px;
                    width: 90%;
                }

                .left{
                    /* width: 50%; */
                    width: 100%;

                    img{
                        width: 100%;
                        height: 100%;
                        /* border-radius: 4px; */
                        /* margin-bottom: 5px; */
                    }
                }

                .item-name {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    padding: 5px 5px;
                    color: white;
                    font-size: 0.65rem;
                    font-weight: 500;
                    /* font-style: italic; */
                    letter-spacing: 0.05rem;
                    z-index: 2;
                }
            }

            .link-2-shop::after {
                content: "";
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 50%; /* Adjust for how much fade you want */
                background: linear-gradient(to top, rgba(0, 0, 0, 0.75), transparent);
                z-index: 1;
            }
        }

        .shop-2 > .link-2-shop:nth-child(3n) {
            margin-right: 0;
        }

        .view-all-btn{
            margin: 15px 0 0 0;
            display: flex;
            align-items: center;
            justify-content: center;

            .btn-3{
                padding: 7.5px 20px;
                font-size: 0.65rem;
                border: 1px solid #676363;
                color: white;
                border-radius: 100px;
                background-color: #363636;
                font-weight: 500;
            }
        }
    }

    .share-my-page{
        height: 20px;
        /* margin: 60px 0 30px 0;
        font-size: 0.75rem;
        color: cornflowerblue;
        text-align: center; */
    }
`

const StarsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 4px;
  color: #f5c518; /* IMDb star color */
  
  svg{
    font-size: 12px;
    fill: #f5c518; /* IMDb star color */
  }
`;


const Subscribe = styled.div`
    position: fixed; 
    top: 20px;
    right: 20px;
    height: 30px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    background-color: white;
    z-index: 1000;

    display: grid;
    place-items: center;

    svg{
        height: 1.25rem;
        fill: black;
    }
`

const RedorGreenFlag = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 80px;

    position: relative;

    .info{
        position: absolute;
        top: -25px;
        font-size: 0.65rem;
        color: white;
        left: 50px;
    }

    .vote-btn{
        height: 30px;
        aspect-ratio: 1/1;
        border-radius: 50%;
        background-color: #363636;
        z-index: 100;

        display: grid;
        place-items: center;

        svg{
            height: 2rem;
            fill: white;
        }
    }

    .box{
        border: 2px solid white;
        height: 50px;
        width: calc(100% - 80px);
        background-color: #333;
        border-radius: 100px;

        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 0.75rem;
        overflow: hidden;

        .left{
            background-color: #5ca65c;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

            /* text-wrap: nowrap; */
            white-space: nowrap;
            width: 28%;
            border-right: 2px solid white;
            overflow: hidden;
            padding: 5px;
        }

        .right{
            height: 100%;
            width: 72%;
            display: flex;
            align-items: center;
            justify-content: center;
            
            background-color: #e94747;
            overflow: hidden;
            padding: 5px;
        }
    }
`