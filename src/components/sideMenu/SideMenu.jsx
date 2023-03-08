import "./index.css";
import {
  BiHash,
  BiHomeAlt2,
  BiNotification,
  BiMessageSquareDetail,
} from "react-icons/Bi";
import { BsBookmarkStar, BsCardList } from "react-icons/Bs";
import { CgMoreO } from "react-icons/Cg";

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
      <div className="messages">
        <div className="explore-icon">
          <BsBookmarkStar />
        </div>
        <a href="#" className="messages-text">
          Bookmarks
        </a>
      </div>
      <div className="messages">
        <div className="explore-icon">
          <BsCardList />
        </div>
        <a href="#" className="messages-text">
          Lists
        </a>
      </div>
      <div className="messages">
        <div className="explore-icon">
          <img src="https://robohash.org/facilisdignissimosdolore.png" alt="" />
        </div>
        <a href="#" className="messages-text">
          Profile
        </a>
      </div>
      <div className="messages">
        <div className="explore-icon">
          <CgMoreO />
        </div>
        <a href="#" className="messages-text">
          More
        </a>
      </div>
      <div className="button">
        <button className="btn">Tweet</button>
      </div>
    </div>
  );
};

export default SideMenu;
