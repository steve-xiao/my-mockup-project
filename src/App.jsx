import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./screens/Login";
import WelcomeScreen from "./screens/WelcomeScreen";
import InitialAttempt from "./screens/InitialAttempt";
import AdjustTrajectory from "./screens/AdjustTrajectory";
import ExtendRange from "./screens/ExtendRange";
import IncreaseHeight from "./screens/IncreaseHeight";
import FinalChallenge from "./screens/FinalChallenge";
import ReflectionScreen from "./screens/ReflectionScreen";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/welcome" element={<WelcomeScreen />} />
            <Route path="/initial-attempt" element={<InitialAttempt />} />
            <Route path="/adjust-trajectory" element={<AdjustTrajectory />} />
            <Route path="/extend-range" element={<ExtendRange />} />
            <Route path="/increase-height" element={<IncreaseHeight />} />
            <Route path="/final-challenge" element={<FinalChallenge />} />
            <Route path="/reflection" element={<ReflectionScreen />} />
        </Routes>
    );
}

export default App;
