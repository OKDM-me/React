import React, { useState, useEffect, useRef } from "react";
import styled from 'styled-components'
import CallMadeIcon from '@material-ui/icons/CallMade';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import AttachFileIcon from '@material-ui/icons/AttachFile';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import BarChartIcon from '@material-ui/icons/BarChart';
import ControlFooter from "../../Components/ControlFooter";

import sampleDp from "../../Images/sampledp.png"

const UserProfile = () => {
  return (
    <Container>
        <div className="user-data">
            <div className="logo-x-dp">
                <img src={sampleDp} alt="" />
            </div>
            <div className="name">Atanu Nayak</div>
            <div className="about-header">Final Year computer science student <br /> @Jadavpur University</div>
            <div className="about-desc">I don't have an original personality I stole it from Shri Krishna 🦚🪈</div>
        </div>

        <ControlFooter/>
    </Container>
  )
}

export default UserProfile

const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-color: #000;
    
    /* background-size: cover; */
    /* background-repeat: no-repeat; */
    /* background-position: center; */
    /* background-attachment: fixed; */

    padding: 30px;

    .user-data{
        display: flex;
        flex-direction: column;
        align-items: center;
        
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
        }
`