import "./index.css";
import Header from "../../components/header";
import MessageList from "../../components/messageList";
import DownNavbar from "../../components/downNavBar";
import { useState } from "react";

const Content = ({ setEditMessage }) => {
  const [headerInputValue, setHeaderInputValue] = useState("");

  return (
    <div className="Content">
      <Header setHeaderInputValue={setHeaderInputValue} />
      <MessageList
        headerInputValue={headerInputValue}
        setEditMessage={setEditMessage}
      />
      <DownNavbar />
    </div>
  );
};

export default Content;
