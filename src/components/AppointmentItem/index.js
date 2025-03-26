import "./index.css";

const AppointmentItem = ({ eachItem, onClickStarIcon }) => {
  const { id, title, date, isStarted } = eachItem;

  const onClickStar = () => {
    onClickStarIcon(id);
  };

  const starImageUrl = isStarted
    ? "https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png"
    : "https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png";

  return (
    <li className="list-cont">
      <div className="row-1">
        <p className="appointment-title">{title}</p>
        <button
          type="button"
          data-testid="star"
          className="star-button-img"
          onClick={onClickStar}
        >
          <img src={starImageUrl} alt="star" className="star-img" />
        </button>
      </div>
      <p className="appointment-date">Date: {date}</p>
    </li>
  );
};

export default AppointmentItem;
