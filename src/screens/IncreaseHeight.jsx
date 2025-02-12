import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import React from "react";
import ChatBox from "../components/ChatBox";
import FreeKickDemo from "../components/FreeKickDemo";

export default function IncreaseHeight() {
    const navigate = useNavigate();

    return (
        <motion.div style={{ display: "flex", height: "100vh", background: "#f5f5f5" }}>
            <FreeKickDemo
                title="Increasing Height"
                equationBase="y = -kx(x - 6)"
                description="Use the scroll bar to fine-tune the trajectory and maximize height."
            />
            <ChatBox />
            <motion.button
                onClick={() => navigate("/final-challenge")}
                style={{
                    position: "absolute",
                    bottom: "20px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontSize: "16px",
                    background: "#ff7e5f",
                    border: "none",
                    color: "white",
                }}
            >
                Final Kick
            </motion.button>
        </motion.div>
    );
}
