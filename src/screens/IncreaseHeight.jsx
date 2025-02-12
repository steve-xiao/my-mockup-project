import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import React from "react";
import ChatBox from "../components/ChatBox";

export default function IncreaseHeight() {
    const navigate = useNavigate();

    return (
        <motion.div className="screen">
            <h1>Increasing the Maximum Height</h1>
            <p>Use the scroll bar to increase the ball's peak height.</p>
            <motion.button onClick={() => navigate("/final-challenge")}>Final Kick</motion.button>
            <ChatBox />
        </motion.div>
    );
}
