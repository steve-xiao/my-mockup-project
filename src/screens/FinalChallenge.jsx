import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import React from "react";
import ChatBox from "../components/ChatBox";

export default function FinalChallenge() {
    const navigate = useNavigate();

    return (
        <motion.div className="screen">
            <h1>Final Challenge</h1>
            <p>You adjust the trajectory and score the winning free kick!</p>
            <motion.button onClick={() => navigate("/reflection")}>Finish</motion.button>
            <ChatBox />
        </motion.div>
    );
}
