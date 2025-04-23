import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";
import Landing from "./Screens/Landing";
import UserArya from "./Screens/UserArya";
import TemplateTesting from "./Screens/TemplateTesting";
import LandingPage from "./Screens/LandingPage";
import Dashboard from "./Screens/Dashboard";
import GetAnswers1 from "./Screens/GetAnswers1";

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user/getvalues" element={<GetAnswers1 />} />
        <Route path="/@mrungreat" element={<UserArya />} />
        <Route path="/mrungreat" element={<UserArya />} />
        <Route path="/@nayakpenguin" element={<Landing />} />
        <Route path="/nayakpenguin" element={<Landing />} />
        <Route path="/testing" element={<TemplateTesting />} />
      </Routes>
    </Container>
  )
}

export default App

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`