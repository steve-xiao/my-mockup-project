import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

export default function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                background: "linear-gradient(to bottom, #0072ff, #00c6ff)",
                color: "white",
            }}
        >
            <h1>Login</h1>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{ padding: "10px", margin: "10px", borderRadius: "5px" }}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ padding: "10px", margin: "10px", borderRadius: "5px" }}
            />
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
                onClick={() => navigate("/welcome")}
            >
                Login
            </motion.button>
        </motion.div>
    );
}
