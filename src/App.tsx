import React, { useEffect, useState } from "react";
import "./App.scss";
import Body from "./components/Body/Body";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Stats from "./components/Stats/Stats";
const App: React.FC = () => {
  useEffect(() => {
    document.title = "Endzone Clan Clash of Clans";
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Body clanDaten="" />} />
        <Route path="/stats" element={<Stats />} />
      </Routes>
    </Router>
  );
};

export default App;
