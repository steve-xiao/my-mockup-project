import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import React from "react";
import ChatBox from "../components/ChatBox";
import FreeKickDemo from "../components/FreeKickDemo";

export default function ExtendRange() {
    const navigate = useNavigate();

    return (
        <motion.div style={{ display: "flex", height: "100vh", background: "#f5f5f5" }}>
            <FreeKickDemo
                title="Extending the Range"
                equationBase="y = -110x(x - 6)"
                description="Modify the equation to shift the landing position towards the goal."
            />
            <ChatBox />
            <motion.button
                onClick={() => navigate("/increase-height")}
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
                Adjust Height
            </motion.button>
        </motion.div>
    );
}
