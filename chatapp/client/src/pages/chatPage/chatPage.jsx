import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

const ChatPage = ({ username, logout }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    socket.on("receiveMessage", (message) => {
      console.log("Received message:", message); // Debugging message reception
      setMessages((prev) => [...prev, message]);
    });
    return () => socket.off("receiveMessage");
  }, []);

  const sendMessage = () => {
    if (input.trim()) {
      const message = { sender: username, text: input };
      console.log("Sending message:", message); // Debugging message sending
      socket.emit("sendMessage", message); // Emit event to server
      setInput("");
    }
  };

  return (
    <div className="flex flex-col items-center w-full h-screen p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Logged in as {username}</h1>
      <button
        onClick={logout}
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700"
      >
        Logout
      </button>
      <div className="w-full max-w-2xl bg-white pt-3 shadow-lg rounded-lg p-4 h-[70%] overflow-y-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 p-2 rounded-lg ${
              msg.sender === username
                ? "bg-blue-200 self-end"
                : "bg-gray-200 self-start"
            }`}
          >
            <strong>{msg.sender}</strong>: {msg.text}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 mt-4 w-full max-w-2xl">
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatPage;
