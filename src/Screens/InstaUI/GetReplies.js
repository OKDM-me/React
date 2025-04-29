import React, { useState, useEffect, useRef } from "react";
import styled from 'styled-components'
import CallMadeIcon from '@material-ui/icons/CallMade';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import AttachFileIcon from '@material-ui/icons/AttachFile';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import BarChartIcon from '@material-ui/icons/BarChart';
import ControlFooter from "../../Components/ControlFooter";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import RoomIcon from '@material-ui/icons/Room';

import sampleDp from "../../Images/sampledp.png"

const GetReplies = () => {
    const [replies, setReplies] = useState([]);
    const [input, setInput] = useState("");

    const handleReply = () => {
        if (input.trim() !== "") {
            setReplies([input, ...replies]);
            setInput("");
        }
    };

    return (
        <Container>
            <div className="main-content">
                <div className="back-control">
                    <ArrowBackIcon />
                    @nayakpenguin
                </div>
                <div className="question">What are your honest thoughts on my Instagram profile?</div>
                <div className="desc">I'm trying to improve my personal brand. Feel free to give feedback on the vibe, content, or overall look. Be honest!</div>
                <textarea
                    className="ans-input"
                    placeholder="Write your anonymous reply here..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
            </div>
            <ControlFooter />
        </Container>
    )
}

export default GetReplies

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
        padding-top: 30px;

        position: relative;
        
        .back-control{
            position: fixed;
            top: 0px;
            left: 0px;

            border-bottom: 1px solid #313231;

            height: 60px;
            width: 100vw;

            display: flex;
            align-items: center;
    
            font-size: 0.9rem;
            font-weight: 500;

            color: whitesmoke;

            padding: 0 30px;
    
            svg{
                font-size: 1.25rem;
                margin-right: 15px;
            }
    
            margin-bottom: 10px;

            background-color: black;
        }
        
        .question{
            font-size: 1.25rem;
            margin-top: 20px;
            font-weight: 500;
        }

        .desc{
            margin-top: 10px;
            font-weight: 200;
            font-size: 0.85rem;
        }

        .ans-input{
            width: 100%;
            border-radius: 10px;
            height: 200px;
            margin: 20px 0;
            outline: none;
            background-color: transparent;
            background-color:rgb(22, 22, 22);
            border: 1px solid #363636;
            padding: 20px;
            color: white;
        }
    }

`