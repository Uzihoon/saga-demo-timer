import React, { useState } from "react";
import "./Timer.scss";
import play from "../../assets/play.png";
import pause from "../../assets/pause.png";
import refresh from "../../assets/refresh.png";

const buttonComponent = {
  play: { key: "play", title: "Play", img: play },
  pause: { key: "pause", title: "Pause", img: pause },
  refresh: { key: "refresh", title: "Refresh", img: refresh }
};

type Button = keyof typeof buttonComponent;

function Timer() {
  const [buttonList, setButtonList] = useState<Button[]>(["play", "refresh"]);
  const [src, setSrc] = useState(play);

  return (
    <div className="wrapper">
      <div className="timer">00:00:00</div>
      <div className="button-list">
        {buttonList.map(btn => {
          const button = buttonComponent[btn];

          return (
            <div className="button-box" key={button.key}>
              <div className="button">
                <img src={button.img} />
              </div>
              <div className="title">{button.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Timer;
