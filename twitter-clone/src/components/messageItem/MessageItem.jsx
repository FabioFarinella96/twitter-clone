import "./index.css";

const MessageItem = ({ messageData }) => {
  const { username, message, image } = messageData;

  return (
    <div className="MessageItem">
      <div className="image-container">
        <img className="image" src={image} alt={username} />
      </div>
      <div className="content">
        <div className="up-content">
          <h3 className="username">{username}</h3>
          <p className="message">{message}</p>
        </div>
        <div className="down-content">
          <img
            src="https://img.icons8.com/ios/256/speech-bubble--v1.png"
            alt="home-icon"
          />
          <img
            src="https://img.icons8.com/ios-filled/256/u-turn-to-left.png"
            alt="home-icon"
          />
          <img
            src="https://img.icons8.com/material-outlined/256/hearts.png"
            alt="home-icon"
          />
          <img
            src="https://img.icons8.com/material-outlined/256/downloads.png"
            alt="home-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default MessageItem;
