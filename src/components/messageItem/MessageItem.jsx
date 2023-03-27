import "./index.css";
import { useState, useEffect } from "react";
import { FaRegComment, FaEdit, FaShareSquare } from "react-icons/Fa";
import { AiFillHeart } from "react-icons/Ai";

const MessageItem = ({ dataPosts, setEditMessage }) => {
  const { userId, body } = dataPosts;

  const [dataUser, setDataUser] = useState({});
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setDataUser(data));
  }, []);

  const modifyMessage = () => {
    setEditMessage(true);
  };

  return (
    <div className="MessageItem">
      <div className="image-container">
        <img className="image" src={dataUser.image} alt={dataUser.username} />
      </div>
      <div className="content">
        <div className="up-content">
          <h3 className="username">{dataUser.username}</h3>
          <p className="message">{body}</p>
        </div>
        <div className="down-content">
          <div>
            <FaRegComment className="down-content-icons" />
          </div>
          <div>
            <FaEdit className="down-content-icons" onClick={modifyMessage} />
          </div>
          <div className="likes-container">
            <AiFillHeart
              className={`down-content-icons ${likes && "red-heart"}`}
              onClick={() => setLikes(likes + 1)}
            />
            <span>{likes}</span>
          </div>
          <div>
            <FaShareSquare className="down-content-icons" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageItem;
