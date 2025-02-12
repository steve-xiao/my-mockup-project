import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import React from "react";
import ChatBox from "../components/ChatBox";

export default function AdjustTrajectory() {
    const navigate = useNavigate();

    return (
        <motion.div className="screen">
            <h1>Adjusting the Trajectory</h1>
            <p>You factor the equation and find the ball lands at x = 1m. Not far enough!</p>
            <motion.button onClick={() => navigate("/extend-range")}>Increase Distance</motion.button>
            <ChatBox />
        </motion.div>
    );
}
