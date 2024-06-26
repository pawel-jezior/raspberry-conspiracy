import "./Medal.css";
import win from "../../media/images/win.png";
import progress from "../../media/images/progress.png";
import { useEffect } from "react";

export const Medal = ({ pointsP, pointsB }) => {
  useEffect(() => {
    const upperText = document.getElementById("text");
    const medal = document.getElementById("medal");
    const bottomText = document.getElementById("nextWeekText");
    const image = document.getElementById("image");
    const imageProgress =  document.getElementById("imageProgress");
    const line = document.getElementById("line");
    if (
      upperText &&
      bottomText &&
      image &&
      line &&
      medal &&
      pointsP + pointsB >= 1000
    ) {
      upperText.innerHTML = "WE DID IT!";
      upperText.style.marginTop = "0";
      bottomText.style.display = "block";
      image.style.display = "block";
      imageProgress.style.display = "none";
      line.style.display = "block";
      medal.style.border = "4px solid #07cc00";
    } else if (
      upperText &&
      bottomText &&
      image &&
      line &&
      medal &&
      pointsP + pointsB < 1000 &&
      pointsP + pointsB > 0
    ) {
      upperText.innerHTML = "In progress...";
      upperText.style.marginTop = "-6px";
      bottomText.style.display = "none";
      image.style.display = "none";
      imageProgress.style.display = "block";
      line.style.display = "none";
      medal.style.border = "4px solid #ffd900";
    } else if (
      upperText &&
      bottomText &&
      image &&
      line &&
      medal &&
      pointsP + pointsB <= 0
    ) {
      upperText.innerHTML = "Let's start!";
      upperText.style.marginTop = "0";
      bottomText.style.display = "none";
      image.style.display = "none";
      imageProgress.style.display = "none";
      line.style.display = "none";
      medal.style.border = "4px solid #ff007f";
    }
  });

  return (
    <div id="medal" className="medal">
      <div id="text" className="text">
        WE DID IT!
      </div>
      <img id="image" className="image" src={win} alt="win" />
      <img id="imageProgress" className="imageProgress" src={progress} alt="win" />
      <span id="line" className="line" />
      <div id="nextWeekText" className="nextWeekText">
        See you next week!
      </div>
    </div>
  );
};
