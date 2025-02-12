import { motion } from "framer-motion";
import React, { useState } from "react";

export default function ChatBox() {
    const [messages, setMessages] = useState([
        { sender: "AI", text: "Hello! Need help with math?" }
    ]);
    const [input, setInput] = useState("");

    const sendMessage = () => {
        if (input.trim() === "") return;
        setMessages([...messages, { sender: "User", text: input }]);
        setInput("");
        
        // Simulated AI response (replace with actual API call to LLM)
        setTimeout(() => {
            setMessages(prev => [...prev, { sender: "AI", text: "Great question! Let's solve this together." }]);
        }, 1000);
    };

    return (
        <motion.div
            className="chatbox"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{
                width: "300px",
                height: "90vh",
                background: "#222",
                color: "white",
                padding: "10px",
                borderRadius: "10px",
                position: "fixed",
                right: "10px",
                top: "5vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
            }}
        >
            <div style={{ flex: 1, overflowY: "auto" }}>
                {messages.map((msg, index) => (
                    <div key={index} style={{ textAlign: msg.sender === "User" ? "right" : "left", marginBottom: "5px" }}>
                        <strong>{msg.sender}:</strong> {msg.text}
                    </div>
                ))}
            </div>
            <div>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                    placeholder="Type a message..."
                    style={{
                        width: "80%",
                        padding: "5px",
                        borderRadius: "5px",
                        border: "none",
                    }}
                />
                <button onClick={sendMessage} style={{ marginLeft: "5px", cursor: "pointer" }}>Send</button>
            </div>
        </motion.div>
    );
}
