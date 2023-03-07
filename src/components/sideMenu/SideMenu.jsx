import "./index.css";
import {
  BiHash,
  BiHomeAlt2,
  BiNotification,
  BiMessageSquareDetail,
} from "react-icons/Bi";

const SideMenu = () => {
  return (
    <div className="SideMenu">
      <img
        className="logo"
        src="https://img.icons8.com/color/256/twitter.png"
        alt="twitter-icon"
      />

      <div className="home">
        <div className="explore-icon">
          <BiHomeAlt2 />
        </div>
        <a href="#" className="home-text">
          Home
        </a>
      </div>
      <div className="explore">
        <div className="explore-icon">
          <BiHash />
        </div>
        <a href="#" className="explore-text">
          Explore
        </a>
      </div>
      <div className="notification">
        <div className="explore-icon">
          <BiNotification />
        </div>
        <a href="#" className="notification-text">
          Notification
        </a>
      </div>
      <div className="messages">
        <div className="explore-icon">
          <BiMessageSquareDetail />
        </div>
        <a href="#" className="messages-text">
          Messages
        </a>
      </div>
      <div className="button">
        <button className="btn">Tweet</button>
      </div>
    </div>
  );
};

export default SideMenu;
