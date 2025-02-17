import React, { useState, useEffect, useRef } from "react";
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';

const LandingPage = () => {
    const [offset, setOffset] = useState(0);
    
    useEffect(() => {
        const handleScroll = () => setOffset(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    return (
        <Container>
            <Navbar>
                <div className="left">
                    <div className="logo">
                        OKDM.me
                    </div>
                </div>
                <div className="middle no-mob">
                    Not visible
                </div>

                <div className="right">
                    <button className="btn btn-2">
                        Create your page
                    </button>

                    <MenuIcon className="menu-btn" />
                </div>
            </Navbar>

            <FocusContent>
                <div className="section-1">
                    <div className="section-1-main">
                    <Image src="https://buffer.com/_next/image?url=%2Fstatic%2Fimages%2Fhomepage%2Fhero-schedule.webp&w=640&q=75" alt="" style={{ top: '150px', left: '-40px' }} offset={offset * -1 * 0.1} />
                    <Image src="https://buffer.com/_next/image?url=%2Fstatic%2Fimages%2Fhomepage%2Fhero-engage.webp&w=640&q=75" alt="" style={{ top: '-15px' }} offset={offset * -1 * 0.2} />
                    <Image src="https://buffer.com/_next/image?url=%2Fstatic%2Fimages%2Fhomepage%2Fhero-add-images.webp&w=640&q=75" alt="" height="100px" style={{ top: '250px', right: '-40px' }} offset={offset * -1 * 0.15} />
                    <Image src="https://buffer.com/_next/image?url=%2Fstatic%2Fimages%2Fhomepage%2Fhero-analyze.webp&w=640&q=75" alt="" height="120px" style={{ bottom: '-20px', right: '-40px' }} offset={offset * -1 * 0.25} />
                    <Image src="https://buffer.com/_next/image?url=%2Fstatic%2Fimages%2Fhomepage%2Fhero-tag.webp&w=640&q=75" alt="" style={{ top: '350px', left: '-40px' }} offset={offset * -1 * 0.18} />

                        <h3>Your Bio, Your Story - Go Beyond the Bio</h3>
                        <div className="desc">Share more, connect deeper, and showcase your world — all set up in just 5 minutes!</div>
                        <input type="text" className="email-input all-shadow" placeholder="Enter your email" />
                        <button className="btn btn-2 all-shadow">Get your page</button>
                        <div className="desc desc-2">By entering your email, you agree to receive emails from us.</div>
                    </div>
                </div>
                <div className="section-2"></div>
            </FocusContent>
        </Container>
    )
}

export default LandingPage

const Container = styled.div`
    p, span, div, h1, h2, h3, h4, h5, h6, svg {
        color: #333;
        fill: #333;
    }

    .no-mob{
        @media (max-width: 1000px) {
            display: none;
        }
    }

    .no-lap{
        @media (min-width: 1001px) {
            display: none;
        }
    }

    .btn{
        font-size: 0.9rem;
        padding: 15px 25px;
        border-radius: 50px;
        border: 1px solid black;
        font-weight: 300;
    }

    .btn-2{
        color: black;
        background-color: #b0ec9c;
    }

    .all-shadow{
        -webkit-box-shadow: 1px 0px 19px -4px rgba(0,0,0,0.36);
        -moz-box-shadow: 1px 0px 19px -4px rgba(0,0,0,0.36);
        box-shadow: 1px 0px 19px -4px rgba(0,0,0,0.36);
    }

    .email-input{
        font-size: 0.9rem;
        padding: 15px 25px;
        border-radius: 50px;
        border: 1px solid black;
        font-weight: 300;
    }
`

const Navbar = styled.div`
    position: fixed;
    top: 0;
    height: 70px;
    width: 100vw;
    padding: 15px;

    z-index: 100;

    background-color: #fffffa;
    border-bottom: 1px solid rgb(233, 229, 229);
    box-shadow: rgba(0, 0, 0, 0.05) 1px 1px 10px 0px;

    display: flex;  
    align-items: center;
    justify-content: space-between;

    .left{
        .logo{
            font-weight: 600;
            letter-spacing: 0.1rem;
            font-size: 1.15rem;
        }   
    }

    .right{
        display: flex;
        align-items: center;

        .menu-btn{
            margin-left: 10px;
            font-size: 1.75rem;
        }
    }   
`

const FocusContent = styled.div`
    .section-1{
        margin-top: 80px;
        overflow: hidden;
        height: 600px;
        padding: 20px;
        
        .section-1-main{
            position: relative;

            height: 100%;
            background-color: #f2f2e8;
            border-radius: 30px;
            padding: 30px;
            
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            h3{
                font-size: 2rem;
                font-weight: 600;
                text-align: center;
            }

            .desc{
                text-align: center;
                font-size: 1rem;
                font-weight: 400;

                margin-top: 20px;
            }

            .email-input{
                margin: 35px 0 10px 0;
                width: 90%;
            }

            .desc-2{
                font-size: 0.75rem;
                font-weight: 400;
                margin-top: 45px;

                color: hsl(180deg 4% 49.02%);
            }

            .img{
                height: 80px;
                opacity: 0.35;
                transform: translateY(${props => props.offset}px);
                transition: transform 0.2s ease-out;
            }

            .img-1{
                position: absolute;
                top: 150px;
                left: -40px;
            }

            .img-2{
                position: absolute;
                top: -15px;
            }

            .img-3{
                position: absolute;
                top: 250px;
                right: -40px;
                height: 100px;
            }

            .img-4{
                position: absolute;
                bottom: -20px;
                right: -40px;
                height: 120px;
            }

            .img-5{
                position: absolute;
                top: 350px;
                left: -40px;
            }
        }
    }  
    
    .section-2{
        height: 1000px;
    }
`

const Image = styled.img`
  position: absolute;
  opacity: 0.35;
  height: ${props => props.height || '80px'};
  transform: translateY(${props => props.offset}px);
  transition: transform 0.2s ease-out;
`;