import React, { useState } from "react";
import ChatPage from "./pages/chatPage/chatPage";

const App = () => {
  const [username, setUsername] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username.trim()) {
      setLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername("");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {loggedIn ? (
        <ChatPage username={username} logout={handleLogout} />
      ) : (
        <div className="bg-white p-6 shadow-lg rounded-lg flex flex-col gap-3 w-80">
          <label className="text-gray-700 font-semibold">Username</label>
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleLogin}
            className="bg-gray-400 font-semibold py-2 rounded-md hover:bg-blue-600 transition"
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
