import messageList from "../../mock/messageList";
import "./index.css";
import MessageItem from "../../components/messageItem";

const MessageList = () => {
  return (
    <div className="MessageList">
      {messageList.map((user) => (
        <MessageItem messageData={user} Key={user.id} />
      ))}
    </div>
  );
};

export default MessageList;
