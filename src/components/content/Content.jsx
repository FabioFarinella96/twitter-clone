import "./index.css";
import Header from "../../components/header";
import MessageList from "../../components/messageList";
import DownNavbar from "../../components/downNavBar";
import { useState } from "react";

const Content = () => {
  const [headerInputValue, setHeaderInputValue] = useState("");
  return (
    <div className="Content">
      <Header setHeaderInputValue={setHeaderInputValue} />
      <MessageList headerInputValue={headerInputValue} />
      <DownNavbar />
    </div>
  );
};

export default Content;
