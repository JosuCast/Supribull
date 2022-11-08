import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Post from "./components/Post";
import Help from "./components/Help";
import Navbar from "./components/Navbar";
import Messages from "./components/Messages";
import Notifications from "./components/Notifications";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/help" element={<Help />} />
        <Route path="/post" element={<Post />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/notification" element={<Notifications />} />
        <Route path="/profile" element={<Profile />} />
        
      </Routes>
    </div>
  );
}

export default App;
