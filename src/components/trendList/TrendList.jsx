import "./index.css";
import trendList from "../../mock/trendList";
import TrendItem from "../../components/trendItem";

const TrendList = () => {
  return (
    <div className="TrendList">
      {trendList.map((element, index) => (
        <TrendItem data={element} key={index} />
      ))}
    </div>
  );
};

export default TrendList;
