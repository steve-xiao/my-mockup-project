import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import React from "react";
import ChatBox from "../components/ChatBox";
import FreeKickDemo from "../components/FreeKickDemo";

export default function AdjustTrajectory() {
    const navigate = useNavigate();

    return (
        <motion.div style={{ display: "flex", height: "100vh", background: "#f5f5f5" }}>
            <FreeKickDemo
                title="Adjusting Trajectory"
                equationBase="y = -110x(x - 1)"
                description="Factor the quadratic equation to understand where the ball lands."
            />
            <ChatBox />
            <motion.button
                onClick={() => navigate("/extend-range")}
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
                Increase Distance
            </motion.button>
        </motion.div>
    );
}
