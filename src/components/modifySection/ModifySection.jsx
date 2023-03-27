import "./index.css";
import { useState } from "react";

const ModifySection = ({ setEditMessage }) => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputMessage, setInputMessage] = useState("");
  const [inputUserId, setInputUserId] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://dummyjson.com/posts/${inputUserId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: inputTitle,
        message: inputMessage,
        userId: inputUserId,
      }),
    });
  };

  return (
    <div className="ModifySection">
      <div className="modify-section-content">
        <h2 className="title">Edit post</h2>
        <button className="button" onClick={() => setEditMessage(false)}>
          X
        </button>

        <form onSubmit={onHandleSubmit} className="modify-section__form">
          <input
            value={inputTitle}
            onChange={(e) => setInputTitle(e.target.value)}
            type="text"
            placeholder="Insert username"
            required
          />
          <input
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            type="text"
            placeholder="Insert message"
            required
          />
          <input
            value={inputUserId}
            onChange={(e) => setInputUserId(e.target.value)}
            type="number"
            placeholder="Insert your Id"
            required
          />

          <input className="submit-button" type="submit" value="Edit" />
        </form>
      </div>
    </div>
  );
};

export default ModifySection;
