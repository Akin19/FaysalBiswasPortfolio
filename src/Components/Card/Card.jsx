import "./Card.css";

const Card = ({ emoji, heading, detail }) => {
  return (
    <div className="card">
      <div className="card-heading">
        <img src={emoji} alt="" />
        <h3>{heading}</h3>
      </div>
      <div className="overlay">
        <span>{detail}</span>
        {/* <button className="button">
          <a href="#">See Demo</a>
        </button> */}
      </div>
    </div>
  );
};

export default Card;
