import "./User.css";
import gifPawel from "../../media/gifs/gifPawel.gif";
import gifBasia from "../../media/gifs/gifBasia.gif";

export const User = ({ name, points }) => {
  const getGif = (name) => {
    if (name === "Paweł") {
      return gifPawel;
    } else if (name === "Basia") {
      return gifBasia;
    }
  };

  const getPointsAsProcent = (points) => {
    const result = Math.round(points / 5);

    if (points >= 500) {
      return 100;
    } else {
      return result;
    }
  };

  const changeDotsColor = (pointsProcent) => {
    const dot1 = document.getElementById(`dot1_${name}`);
    const dot2 = document.getElementById(`dot2_${name}`);
    const dot3 = document.getElementById(`dot3_${name}`);
    const dot4 = document.getElementById(`dot4_${name}`);
    const dot5 = document.getElementById(`dot5_${name}`);

    if (
      dot1 &&
      dot2 &&
      dot3 &&
      dot4 &&
      dot5 &&
      pointsProcent >= 20 &&
      pointsProcent < 40
    ) {
      dot1.style.backgroundColor = "#ff007f";
      dot2.style.backgroundColor = "#83838373";
      dot3.style.backgroundColor = "#83838373";
      dot4.style.backgroundColor = "#83838373";
      dot5.style.backgroundColor = "#83838373";
    } else if (
      dot1 &&
      dot2 &&
      dot3 &&
      dot4 &&
      dot5 &&
      pointsProcent >= 1 &&
      pointsProcent <= 19
    ) {
      dot1.style.backgroundColor = "#83838373";
      dot2.style.backgroundColor = "#83838373";
      dot3.style.backgroundColor = "#83838373";
      dot4.style.backgroundColor = "#83838373";
      dot5.style.backgroundColor = "#83838373";
    } else if (
      dot1 &&
      dot2 &&
      dot3 &&
      dot4 &&
      dot5 &&
      pointsProcent >= 40 &&
      pointsProcent < 60
    ) {
      dot1.style.backgroundColor = "#ff007f";
      dot2.style.backgroundColor = "#ff007f";
      dot3.style.backgroundColor = "#83838373";
      dot4.style.backgroundColor = "#83838373";
      dot5.style.backgroundColor = "#83838373";
    } else if (
      dot1 &&
      dot2 &&
      dot3 &&
      dot4 &&
      dot5 &&
      pointsProcent >= 60 &&
      pointsProcent < 80
    ) {
      dot1.style.backgroundColor = "#ff007f";
      dot2.style.backgroundColor = "#ff007f";
      dot3.style.backgroundColor = "#ff007f";
      dot4.style.backgroundColor = "#83838373";
      dot5.style.backgroundColor = "#83838373";
    } else if (
      dot1 &&
      dot2 &&
      dot3 &&
      dot4 &&
      dot5 &&
      pointsProcent >= 80 &&
      pointsProcent < 100
    ) {
      dot1.style.backgroundColor = "#ff007f";
      dot2.style.backgroundColor = "#ff007f";
      dot3.style.backgroundColor = "#ff007f";
      dot4.style.backgroundColor = "#ff007f";
      dot5.style.backgroundColor = "#83838373";
    } else if (dot1 && dot2 && dot3 && dot4 && dot5 && pointsProcent >= 100) {
      dot1.style.backgroundColor = "#1cf100";
      dot2.style.backgroundColor = "#1cf100";
      dot3.style.backgroundColor = "#1cf100";
      dot4.style.backgroundColor = "#1cf100";
      dot5.style.backgroundColor = "#1cf100";
    } else if (dot1 && dot2 && dot3 && dot4 && dot5 && pointsProcent <= 0) {
      dot1.style.backgroundColor = "#83838373";
      dot2.style.backgroundColor = "#83838373";
      dot3.style.backgroundColor = "#83838373";
      dot4.style.backgroundColor = "#83838373";
      dot5.style.backgroundColor = "#83838373";
    }
  };

  const addRainbow = (points) => {
    const rainbowElement = document.getElementById(`rainbow_${name}`);

    if (rainbowElement) {
      if (points < 1000) {
        rainbowElement.classList.add("hidden");
      } else {
        rainbowElement.classList.remove("hidden");
      }
    }
  };

  changeDotsColor(getPointsAsProcent(points));
  addRainbow(points);

  return (
    <div className="userContainer">
      <div className="userWrapper">
        <div id={`rainbow_${name}`} className="rainbow hidden"></div>
        <img className="user" src={getGif(name)} alt="user gif" />
      </div>

      <div className="user-name">{name}</div>

      <div className="user-dots">
        <div id={`dot1_${name}`} className="dot-1"></div>
        <div id={`dot2_${name}`} className="dot-2"></div>
        <div id={`dot3_${name}`} className="dot-3"></div>
        <div id={`dot4_${name}`} className="dot-4"></div>
        <div id={`dot5_${name}`} className="dot-5"></div>
      </div>
    </div>
  );
};
