import "./index.css";
import MessageItem from "../../components/messageItem";
import { useState, useEffect } from "react";

const MessageList = ({ headerInputValue, setEditMessage }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => setData(data.posts));
  }, []);

  const filteredMessageList = () =>
    data.filter((msg) => msg.body.includes(headerInputValue));

  return (
    <div className="MessageList">
      {filteredMessageList().map((post, index) => (
        <MessageItem
          key={index}
          dataPosts={post}
          setEditMessage={setEditMessage}
        />
      ))}
    </div>
  );
};

export default MessageList;
