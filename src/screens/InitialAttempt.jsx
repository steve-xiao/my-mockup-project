import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import React from "react";
import ChatBox from "../components/ChatBox";

export default function InitialAttempt() {
    const navigate = useNavigate();

    return (
        <motion.div className="screen">
            <h1>Initial Attempt: Kicking Horizontally</h1>
            <p>You kick the ball straight, but it doesn't clear the defense!</p>
            <motion.button onClick={() => navigate("/adjust-trajectory")}>Try Again</motion.button>
            <ChatBox />
        </motion.div>
    );
}
