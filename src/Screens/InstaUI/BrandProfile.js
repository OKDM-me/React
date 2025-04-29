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

import sampleBrandDp from "../../Images/samplebranddp.jpeg"
import brandproduct1 from "../../Images/brandproduct1.png"
import brandproduct2 from "../../Images/brandproduct2.png"
import brandproduct3 from "../../Images/brandproduct3.png"


const BrandProfile = () => {
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
                <div className="user-data">
                    <div className="logo-x-dp">
                        <img src={sampleBrandDp} alt="" />
                    </div>
                    <div className="name">H O L Y M U D🌺</div>
                    <div className="about-header">Home decor</div>
                    <div className="about-desc">Holy Mud is a premium and luxurious range of handcrafted, natural and organic products. <br /> +91 7428 272 372</div>
                    <div className="about-location"><RoomIcon /> India</div>

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
                        <div className="social-icon">
                            <img src="https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg" alt="" />
                        </div>
                        <div className="social-icon">
                            <img src="https://images.seeklogo.com/logo-png/31/2/flipkart-logo-png_seeklogo-318406.png" alt="" />
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
                        Watch our Reels
                        <div className="link-circle">
                            <CallMadeIcon />
                        </div>
                    </div>
                    <div className="link1">
                        Buy our Products
                        <div className="link-circle">
                            <CallMadeIcon />
                        </div>
                    </div>
                    <div className="link1">
                        Which product you like the most?
                        <div className="link-circle">
                            <BarChartIcon />
                        </div>
                    </div>
                    <div className="link1">
                        Collab With Us
                        <div className="link-circle">
                            <ChevronRightIcon />
                        </div>
                    </div>
                    <div className="link1">
                        Mentioned in Forbes for our cool designs
                        <div className="link-circle">
                            <CallMadeIcon />
                        </div>
                    </div>
                    <div className="link1">
                        Share Feedback
                        <div className="link-circle">
                            <ChevronRightIcon />
                        </div>
                    </div>
                    <div className="link1">
                        Complaint/Refund
                        <div className="link-circle">
                            <ChevronRightIcon />
                        </div>
                    </div>
                </div>

                <div className="group">
                    <div className="group-name-container">
                        <div className="group-name-container-line"></div>
                        <div className="group-name">About Us</div>
                        <div className="group-name-container-line"></div>
                    </div>
                    <div className="link1">
                        Who are we?
                        <div className="link-circle">
                            <ChevronRightIcon />
                        </div>
                    </div>
                    <div className="link1">
                        How it started
                        <div className="link-circle">
                            <ChevronRightIcon />
                        </div>
                    </div>
                </div>

                <div className="group">
                    <div className="group-name-container">
                        <div className="group-name-container-line"></div>
                        <div className="group-name">Our Products</div>
                        <div className="group-name-container-line"></div>
                    </div>

                    <div className="shop">
                        <div className="link-2-shop">
                            <div className="left"><img src={brandproduct1} alt="" /></div>
                            <div className="right">
                                <div className="tags">
                                    <div className="tag">Best seller</div>
                                </div>
                                <div className="title">
                                    Cute hand made penguin storage basket | Handcrafted
                                </div>
                                <div className="price">
                                    <div className="main-price"><span>₹</span>669</div> 
                                    <div className="old-price"><div className="strike">M.R.P  : ₹3,396</div> (80% off)</div>
                                </div>
                                <div className="buy-btn">Add to Cart</div>
                            </div>
                        </div>
                        <div className="link-2-shop">
                            <div className="left"><img src={brandproduct2} alt="" /></div>
                            <div className="right">
                                <div className="tags">
                                    <div className="tag">Best seller</div>
                                </div>
                                <div className="title">
                                    Cute hand bag | Flower bag | Handcrafted - Women all size
                                </div>
                                <div className="price">
                                    <div className="main-price"><span>₹</span>399</div> 
                                    <div className="old-price"><div className="strike">M.R.P  : ₹3,396</div> (80% off)</div>
                                </div>
                                <div className="buy-btn">Add to Cart</div>
                            </div>
                        </div>
                        <div className="link-2-shop">
                            <div className="left"><img src={brandproduct3} alt="" /></div>
                            <div className="right">
                                <div className="tags">
                                    <div className="tag">Best seller</div>
                                </div>
                                <div className="title">
                                    Storage bucket 
                                </div>
                                <div className="price">
                                    <div className="main-price"><span>₹</span>999</div> 
                                    <div className="old-price"><div className="strike">M.R.P  : ₹3,396</div> (80% off)</div>
                                </div>
                                <div className="buy-btn">Add to Cart</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ControlFooter />
        </Container>
    )
}

export default BrandProfile

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

            .shop{
                width: 100%;
                display: flex;
                flex-wrap: wrap; 
                justify-content: space-between;

                .link-2-shop{
                    position: relative;
                    padding-bottom: 100px;
                    width: calc(50% - 5px);
                    /* background-color: #363636; */
                    color: #e5e5e5;
                    
                    border-radius: 10px;
                    margin-bottom: 5px;
                    margin-top: 30px;

                    display: flex; 
                    flex-direction: column;
                    align-items: flex-start;


                    .left{
                        /* width: 50%; */
                        width: 100%;
                        
                        img{
                            width: 100%;
                            border-radius: 10px;
                            margin-bottom: 5px;
                        }
                    }

                    .right{
                        /* width: 50%; */
                        width: 100%;
                        /* margin-left: 10px; */

                        .tags{
                            margin-top: 10px;
                            width: 100%;
                            display: flex;
                            align-items: center;
                            flex-wrap: wrap;
                            display: none;
                            
                            .tag{
                                background-color: pink;
                                font-size: 0.85rem;
                                color: #333;
                                font-weight: 600;
                                padding: 5px 10px;
                                border-radius: 100px;
                                margin-right: 5px;
                                margin-bottom: 5px;
                            }
                        }

                        .title{
                            color: #e5e5e5;
                            font-size: 0.75rem;
                            font-weight: 600;
                            width: 100%;
                            margin-bottom: 10px;
                        }

                        .main-price{
                            margin-top: 10px;
                            display: flex;
                            align-items: flex-start;

                            color: #e5e5e5;
                            font-size: 1.15rem;
                            font-weight: 600;
                            font-family: Arial, sans-serif;
                            
                            span{
                                font-family: Arial, sans-serif;
                                font-size: 0.75rem;
                                font-weight: 300;
                                margin-right: 3px;
                            }
                        }
                        
                        .old-price{
                            display: flex;
                            align-items: flex-end;
                            width: 100%;
                            color: #e5e5e5;
                            font-size: 0.7rem;
                            

                            .strike{
                                text-decoration: line-through;
                                margin-right: 5px;
                            }
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

                        .price{
                            position: absolute;
                            bottom: 50px;
                            left: 0;
                            /* padding-left: 10px; */
                        }

                        .buy-btn{
                            position: absolute;
                            margin-top: 10px;
                            bottom: 0;
                            left: 0;
                            width: 100%;
                            font-size: 0.85rem;
                            padding: 10px 15px;
                            background-color: #0095f6;
                            border-radius: 10px;
                            text-align: center;
                        }
                    }
                }
            }
        }
`