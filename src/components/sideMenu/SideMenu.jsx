import "./index.css";
// import { TbMessages } from "react-icons/Tb";
import { MdNotificationsActive } from "react-icons/Md";
import { FaHome, FaHashtag } from "react-icons/Fa";
import {
  BsBookmarkStar,
  BsCardList,
  BsMoonStarsFill,
  BsSun,
} from "react-icons/Bs";
import { CgMoreO } from "react-icons/Cg";

const SideMenu = ({ darkMode, setDarkMode }) => {
  return (
    <div className="SideMenu">
      <img
        className="logo"
        src="https://img.icons8.com/color/256/twitter.png"
        alt="twitter-icon"
      />
      <div className="home">
        <div className="explore-icon">
          <FaHome />
        </div>
        <p className="home-text">Home</p>
      </div>
      <div className="explore">
        <div className="explore-icon">
          <FaHashtag />
        </div>
        <p className="explore-text">Explore</p>
      </div>
      <div className="notification">
        <div className="explore-icon">
          <MdNotificationsActive />
        </div>
        <p className="notification-text">Notification</p>
      </div>
      <div className="messages">
        <div className="explore-icon">
          <TbMessages />
        </div>
        <p className="messages-text">Messages</p>
      </div>
      <div className="messages">
        <div className="explore-icon">
          <BsBookmarkStar />
        </div>
        <p className="messages-text">Bookmarks</p>
      </div>
      <div className="messages">
        <div className="explore-icon">
          <BsCardList />
        </div>
        <p className="messages-text">Lists</p>
      </div>
      <div className="messages">
        <div
          className="messages-text"
          onClick={() => setDarkMode((prev) => !prev)}
        >
          {darkMode ? (
            <p className="sun">
              <BsSun className="sun" />
              Light mode
            </p>
          ) : (
            <p className="moon">
              <BsMoonStarsFill className="moon" />
              Dark mode
            </p>
          )}
        </div>
      </div>
      <div className="messages">
        <div className="explore-icon">
          <img src="https://robohash.org/facilisdignissimosdolore.png" alt="" />
        </div>
        <p className="messages-text"> Profile</p>
      </div>
      <div className="messages">
        <div className="explore-icon">
          <CgMoreO />
        </div>
        <p className="messages-text">More</p>
      </div>
      <div className="button">
        <button className="btn">Tweet</button>
      </div>
    </div>
  );
};

export default SideMenu;
