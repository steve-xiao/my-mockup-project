import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import React from "react";
import ChatBox from "../components/ChatBox";

export default function ExtendRange() {
    const navigate = useNavigate();

    return (
        <motion.div className="screen">
            <h1>Extending the Range</h1>
            <p>The ball now reaches the goal, but it's blocked by the defense at 3m!</p>
            <motion.button onClick={() => navigate("/increase-height")}>Adjust Height</motion.button>
            <ChatBox />
        </motion.div>
    );
}
