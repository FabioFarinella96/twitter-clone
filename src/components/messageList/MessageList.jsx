// import messageList from "../../mock/messageList";
import "./index.css";
import MessageItem from "../../components/messageItem";
import { useState, useEffect } from "react";

const MessageList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => setData(data.posts));
  }, []);

  return (
    <div className="MessageList">
      {data.map((post) => (
        <MessageItem dataPosts={post} Key={post.id} />
      ))}
    </div>
  );
};

export default MessageList;
