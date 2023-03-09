import "./index.css";
import { HiOutlineSparkles } from "react-icons/Hi";
import { BsImages } from "react-icons/Bs";
import { AiOutlineFileGif } from "react-icons/Ai";
import { DiGoogleAnalytics } from "react-icons/Di";
import HamburgerMenu from "../hamburgerMenu";
import { useState } from "react";

const Header = ({ setHeaderInputValue }) => {
  const [showHamburger, setShowHamburger] = useState(false);

  const [inputValue, setInputValue] = useState("");

  const toggleHamburger = () => {
    setShowHamburger(!showHamburger);
  };

  return (
    <div className="Header">
      <HamburgerMenu showHamburger={showHamburger} />
      <div className="upHeader">
        <h2 className="home">Home</h2>
        <img
          className="hamburger-menu"
          src="https://img.icons8.com/material-rounded/256/menu.png"
          alt="header menu"
          onClick={toggleHamburger}
        />

        <img
          className="twitter-icon"
          src="https://img.icons8.com/color/256/twitter.png"
          alt="twitter icon"
        />
        <HiOutlineSparkles className="twitter-sparkling" />
      </div>
      <div className="downHeader">
        <div className="downHeader">
          <img
            className="profile-icon"
            src="https://robohash.org/facilisdignissimosdolore.png"
            alt="profile icon"
          />
          <input
            className="input"
            type="text"
            placeholder="What's happening?"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            required
          />
          <button
            className="button"
            onClick={() => setHeaderInputValue(inputValue)}
          >
            Tweet
          </button>
          <BsImages className="header-icons" />
          <AiOutlineFileGif className="header-icons" />
          <DiGoogleAnalytics className="header-icons" />
        </div>
      </div>
    </div>
  );
};

export default Header;
