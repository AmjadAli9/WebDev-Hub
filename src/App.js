// src/App.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Code from "./pages/CodePad";
import Tutorials from "./pages/Tutorial";
import Resources from "./pages/Resources";
import CommunityPage from "./pages/Community";
import ContactPage from "./pages/Contact";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Codepad" element={<Code />} />
        <Route path="/Learn" element={<Tutorials />} />
        <Route path="/Resources" element={<Resources />} />
        <Route path="/Community" element={<CommunityPage />} />
        <Route path="/Contact" element={<ContactPage />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
