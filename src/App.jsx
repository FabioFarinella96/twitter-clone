import SideMenu from "./components/sideMenu";
import Content from "./components/content";
import SideTrends from "./components/sideTrends";
import { useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`App ${darkMode && "dark-mode"}`}>
      <SideMenu setDarkMode={setDarkMode} darkMode={darkMode} />
      <Content />
      <SideTrends />
    </div>
  );
}

export default App;
