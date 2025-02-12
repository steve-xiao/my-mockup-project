import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import React from "react";
import ChatBox from "../components/ChatBox";

export default function WelcomeScreen() {
    const navigate = useNavigate();

    return (
        <motion.div className="screen">
            <h1>Parabolic Free Kick Challenge</h1>
            <p>Use math to score the winning free kick!</p>
            <motion.button onClick={() => navigate("/initial-attempt")}>Start Challenge</motion.button>
            <ChatBox />
        </motion.div>
    );
}
