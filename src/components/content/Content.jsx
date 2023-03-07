import "./index.css";
import Header from "../../components/header";
import MessageList from "../../components/messageList";
import DownNavbar from "../../components/downNavBar";

const Content = () => {
  return (
    <div className="Content">
      <Header />
      <MessageList />
      <DownNavbar />
    </div>
  );
};

export default Content;
