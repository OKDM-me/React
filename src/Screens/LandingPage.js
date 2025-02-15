import React, { useState, useEffect, useRef } from "react";
import styled from 'styled-components'


const LandingPage = () => {
  return (
    <Container>
        <p>LandingPage</p>
        <h1>LandingPage</h1>
    </Container>
  )
}

export default LandingPage

const Container = styled.div`
    p, span, div, h1, h2, h3, h4, h5, h6 {
        color: #333;
    }
`