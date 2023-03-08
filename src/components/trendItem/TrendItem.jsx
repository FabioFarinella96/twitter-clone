import "./index.css";
import { SlOptions } from "react-icons/Sl";

const TrendItem = ({ data }) => {
  return (
    <div className="TrendItem">
      <div className="up-section">
        <p className="country">{data.country}</p>
        <div>
          <SlOptions className="options-icon" />
        </div>
      </div>
      <h3 className="title">{data.title}</h3>
      <p className="tweet">{data.tweet}</p>
    </div>
  );
};

export default TrendItem;
