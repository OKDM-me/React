import React, { useState, useEffect, useRef } from "react";
import styled from 'styled-components'
import CallMadeIcon from '@material-ui/icons/CallMade';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import AttachFileIcon from '@material-ui/icons/AttachFile';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import BarChartIcon from '@material-ui/icons/BarChart';
import ControlFooter from "../../Components/ControlFooter";

const UserProfile = () => {
  return (
    <Container>
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

    display: flex;
    align-items: center;
    justify-content: center;
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