import "./index.css";
import { BiBookmark, BiMessageRoundedDetail } from "react-icons/Bi";
import { VscListSelection } from "react-icons/Vsc";

const HamburgerMenu = ({ showHamburger }) => {
  return (
    <div className={`HamburgerMenu ${showHamburger ? "showHamburger" : ""}`}>
      <div className="content-up">
        <img
          src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesar&accessoriesType=Sunglasses&hairColor=Red&facialHairType=Blank&facialHairColor=Black&clotheType=Hoodie&clotheColor=Blue02&eyeType=Close&eyebrowType=UpDownNatural&mouthType=Default&skinColor=Tanned"
          alt="profile icon"
        />
        <h3 className="username">Bret</h3>
        <p className="text">@bret2000 - Profile</p>
        <p className="text">
          <b>340</b> Following <b>8k</b> Followers
        </p>
      </div>
      <div className="content-down">
        <h3 className="buttons">
          {" "}
          <BiMessageRoundedDetail /> Topics
        </h3>
        <h3 className="buttons">
          <BiBookmark /> Bookmarks
        </h3>
        <h3 className="buttons">
          <VscListSelection /> Lists
        </h3>
      </div>
    </div>
  );
};

export default HamburgerMenu;
