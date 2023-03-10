import SideMenu from "./components/sideMenu";
import Content from "./components/content";
import SideTrends from "./components/sideTrends";
import ModifySection from "./components/modifySection";
import { useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const [editMessage, setEditMessage] = useState(false);

  return (
    <div className={`App ${darkMode && "dark-mode"}`}>
      <SideMenu setDarkMode={setDarkMode} darkMode={darkMode} />
      <Content setEditMessage={setEditMessage} />
      <SideTrends />
      {editMessage && <ModifySection setEditMessage={setEditMessage} />}
    </div>
  );
}

export default App;
