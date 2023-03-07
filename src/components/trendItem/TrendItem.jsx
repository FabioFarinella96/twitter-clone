import "./index.css";

const TrendItem = ({ data }) => {
  return (
    <div className="TrendItem">
      <div className="up-section">
        <p className="country">{data.country}</p>
        <div>...</div>
      </div>
      <h3 className="title">{data.title}</h3>
      <p className="tweet">{data.tweet}</p>
    </div>
  );
};

export default TrendItem;
