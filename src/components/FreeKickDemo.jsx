import { motion } from "framer-motion";
import React, { useState } from "react";

export default function FreeKickDemo({ title, equationBase, description }) {
    const [k, setK] = useState(110); // Scroll bar controls 'k' in the equation

    return (
        <motion.div
            className="free-kick-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{
                display: "flex",
                flexDirection: "column",
                width: "70vw",
                height: "75vh",
                margin: "20px",
                borderRadius: "10px",
                background: "#ddd",
                padding: "10px",
                position: "relative",
            }}
        >
            {/* Free Kick Simulation */}
            <motion.div
                style={{
                    flex: 2,
                    background: "#444",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    borderRadius: "10px",
                }}
            >
                {/* Ball Curve (Parabola) */}
                <motion.svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 400 200"
                    style={{ position: "absolute", top: 0, left: 0 }}
                >
                    {/* Opponent Defense Wall (Red Blocks) */}
                    <rect x="140" y="100" width="20" height="50" fill="red" />
                    <rect x="160" y="100" width="20" height="50" fill="red" />
                    <rect x="180" y="100" width="20" height="50" fill="red" />

                    {/* Goal Post (Right Side) */}
                    <rect x="370" y="80" width="10" height="70" fill="white" />
                    <rect x="360" y="80" width="10" height="10" fill="white" />

                    {/* Ball Trajectory (Dynamic Parabola) */}
                    <path
                        d={`M50,150 Q200,${200 - k / 10} 350,150`}
                        stroke="yellow"
                        strokeWidth="4"
                        fill="none"
                    />

                    {/* Ball Movement */}
                    <motion.circle
                        cx="50"
                        cy="150"
                        r="8"
                        fill="yellow"
                        animate={{
                            cx: [50, 200, 350],
                            cy: [150, 200 - k / 10, 150],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 2,
                            ease: "easeInOut",
                        }}
                    />
                </motion.svg>
                <h3 style={{ color: "white", position: "absolute" }}>{title} - Free Kick Simulation</h3>
            </motion.div>

            {/* Formula & Variable Tracker */}
            <motion.div
                style={{
                    flex: 1,
                    marginTop: "10px",
                    background: "#222",
                    color: "white",
                    padding: "10px",
                    borderRadius: "10px",
                }}
            >
                <h3>Formula & Variables</h3>
                <p>{description}</p>
                <p><strong>Equation:</strong> y = -{k}x(x - 6)</p>
            </motion.div>

            {/* Scroll Bar to Adjust K Value */}
            <motion.div
                style={{
                    position: "absolute",
                    right: "-60px",
                    top: "20%",
                    transform: "rotate(90deg)",
                }}
            >
                <input
                    type="range"
                    min="50"
                    max="200"
                    value={k}
                    onChange={(e) => setK(e.target.value)}
                    style={{ width: "200px" }}
                />
                <p style={{ textAlign: "center", color: "#000" }}>Adjust K</p>
            </motion.div>
        </motion.div>
    );
}
