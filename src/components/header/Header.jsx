import "./index.css";
import { HiOutlineSparkles } from "react-icons/Hi";
import HamburgerMenu from "../hamburgerMenu";
import { useState } from "react";

const Header = () => {
  const [showHamburger, setShowHamburger] = useState(false);

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
            src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesar&accessoriesType=Sunglasses&hairColor=Red&facialHairType=Blank&facialHairColor=Black&clotheType=Hoodie&clotheColor=Blue02&eyeType=Close&eyebrowType=UpDownNatural&mouthType=Default&skinColor=Tanned"
            alt="profile icon"
          />
          <input
            className="input"
            type="text"
            placeholder="What's happening?"
          />
          <img src="https://img.icons8.com/fluency/256/image.png" alt="icon" />
          <img src="https://img.icons8.com/arcade/256/gif.png" alt="icon" />
          <img
            src="https://img.icons8.com/color/256/combo-chart.png"
            alt="icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
