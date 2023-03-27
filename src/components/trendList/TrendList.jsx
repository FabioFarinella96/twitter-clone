import "./index.css";
import trendList from "../../mock/trendList";
import TrendItem from "../../components/trendItem";
import { FiSettings } from "react-icons/Fi";

const TrendList = () => {
  return (
    <div className="TrendList">
      <div className="input-content">
        <input
          className="trend-input"
          type="text"
          placeholder="Search Twitter"
        />
      </div>
      <div className="title-section">
        <h3 className="trend-title">Trends for you</h3>
        <FiSettings className="settings-icon" />
      </div>
      {trendList.map((element) => (
        <TrendItem data={element} key={element.id} />
      ))}
    </div>
  );
};

export default TrendList;
