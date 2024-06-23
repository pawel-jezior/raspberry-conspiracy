import "./ProgressBar.css";

export const ProgressBar = ({ pointsP, pointsB }) => {
  const getSumPointsAsProcent = (points) => {
    const result = Math.floor(points / 10);

    if (points >= 1000) {
      return 100;
    } else {
      return result;
    }
  };

  const progressBarWidth = (pointsSum) => {
    const progressBar = document.querySelector(".bar");
    if (progressBar) {
      progressBar.style.width = `${getSumPointsAsProcent(pointsSum)}%`;
    }
  };
  progressBarWidth(pointsP + pointsB);

  return (
    <div style={{ marginTop: "50px", width: "100%" }}>
      <div className="target">
        weekly goal: <span className="targetPoints">1000</span>
      </div>
      <div className="barWrapper">
        <div className="bar"></div>
        <div className="procent">
          {getSumPointsAsProcent(pointsP + pointsB)} %
        </div>
      </div>
    </div>
  );
};
