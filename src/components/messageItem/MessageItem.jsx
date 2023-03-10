import "./index.css";
import { useState, useEffect } from "react";
import {
  FaRegComment,
  FaEdit,
  FaShareSquare,
  FaRegHeart,
} from "react-icons/Fa";

const MessageItem = ({ dataPosts, setEditMessage }) => {
  const { userId, body } = dataPosts;

  const [dataUser, setDataUser] = useState({});

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
          <div>
            <FaRegHeart className="down-content-icons" />
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
