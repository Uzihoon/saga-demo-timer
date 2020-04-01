import React, { useState, useEffect } from "react";
import "./Timer.scss";

// Assets
import play from "../../assets/play.png";
import pause from "../../assets/pause.png";
import refresh from "../../assets/refresh.png";
import restart from "../../assets/restart.png";

// Hooks
import useTimerActions from "../../hooks/timer/useTimerActions";
import useTimer from "../../hooks/timer/useTimer";

const buttonComponent = {
  play: { key: "play", title: "Play", img: play },
  pause: { key: "pause", title: "Pause", img: pause },
  refresh: { key: "refresh", title: "Refresh", img: refresh },
  restart: { key: "restart", title: "Restart", img: restart }
};

type Button = keyof typeof buttonComponent;

const toHHMMSS = (time: number) => {
  const format = (num: number) => (num < 10 ? `0${num}` : String(num));

  const sec = time;
  const hours = Math.floor(sec / 3600);
  const minutes = Math.floor((sec - hours * 3600) / 60);
  const seconds = sec - hours * 3600 - minutes * 60;
  return `${format(hours)}:${format(minutes)}:${format(seconds)}`;
};

function Timer() {
  const status = useTimer("status");
  const count = useTimer("count") as number;
  const timerActions = useTimerActions();

  const [buttonList, setButtonList] = useState<Button[]>(["play", "refresh"]);

  const handleClick = (type: Button) => {
    switch (type) {
      case "play":
        timerActions.onStart();
        break;
      case "pause":
        timerActions.onPause();
        break;
      case "refresh":
        timerActions.onStop();
        break;
      case "restart":
        timerActions.onRestart();
        break;
      default:
        console.log(type);
    }
  };

  useEffect(() => {
    let _buttonList: Button[] = ["refresh"];
    switch (status) {
      case "play":
        _buttonList.unshift("pause");
        break;
      case "pause":
        _buttonList.unshift("restart");
        break;
      case "stop":
        _buttonList.unshift("play");
        break;
    }

    setButtonList(_buttonList);
  }, [status]);

  return (
    <div className="wrapper">
      <div className="timer-title">Redux-Saga Timer</div>
      <div className="timer">{toHHMMSS(count)}</div>
      <div className="button-list">
        {buttonList.map(btn => {
          const button = buttonComponent[btn];
          return (
            <div className="button-box" key={button.key}>
              <div className="button" onClick={() => handleClick(btn)}>
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
