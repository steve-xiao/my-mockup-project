import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import React from "react";
import ChatBox from "../components/ChatBox";

export default function ReflectionScreen() {
    const navigate = useNavigate();

    return (
        <motion.div
            className="screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
                textAlign: "center",
                padding: "50px",
                background: "linear-gradient(to bottom, #0072ff, #00c6ff)",
                color: "white",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <h1>Reflection & Discussion</h1>
            <p>Congratulations! You completed the Parabolic Free Kick Challenge.</p>
            <p>Think about what you learned:</p>
            <ul style={{ textAlign: "left" }}>
                <li>How does a parabola describe the motion of the ball?</li>
                <li>What happens when you adjust the quadratic equation?</li>
                <li>How do changes in height and angle affect the goal?</li>
            </ul>
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{
                    padding: "10px 20px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontSize: "16px",
                    background: "#ff7e5f",
                    border: "none",
                    color: "white",
                }}
                onClick={() => navigate("/")}
            >
                Return to Home
            </motion.button>
            <ChatBox />
        </motion.div>
    );
}
