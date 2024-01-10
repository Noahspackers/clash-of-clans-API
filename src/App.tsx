import React, { useEffect } from "react";
import "./App.scss";
import Body from "./components/Body/Body";

const App: React.FC = () => {
  useEffect(() => {
    document.title = "Endzone Clan Clash of Clans";
  }, []);

  return (
    <div>
      <Body />
    </div>
  );
};

export default App;
