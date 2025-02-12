import { motion } from "framer-motion";
import React from "react";

export default function ParabolicFreeKickIntro() {
    return (
        <motion.div
            style={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                color: "white",
                fontFamily: "Arial, sans-serif",
                textAlign: "center",
                background: "linear-gradient(to bottom, #0072ff, #00c6ff)"
            }}
        >
            {/* Game Title */}
            <motion.div
                style={{
                    fontSize: "48px",
                    fontWeight: "bold",
                    textShadow: "2px 2px 5px rgba(0,0,0,0.3)",
                    height: "100px",
                    width: "80%"
                }}
            >
                Parabolic Free Kick Challenge
            </motion.div>

            {/* Description */}
            <motion.div
                style={{
                    fontSize: "24px",
                    marginTop: "20px",
                    lineHeight: "1.5",
                    height: "200px",
                    width: "70%"
                }}
            >
                In a match with the score tied and only seconds left, can you use math to score the winning free kick?
            </motion.div>

            {/* Start Button */}
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{
                    fontSize: "32px",
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    height: "80px",
                    width: "250px",
                    background: "linear-gradient(to right, #ff7e5f, #feb47b)",
                    borderRadius: "20px"
                }}
            >
                Start
            </motion.div>
        </motion.div>
    );
}
