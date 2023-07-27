import React, { useState, useEffect } from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;

const COLOR_CODES = {
  info: {
    color: "green",
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD,
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD,
  },
};

const TIME_LIMIT = 300;

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT);
  const [remainingPathColor, setRemainingPathColor] = useState(
    COLOR_CODES.info.color
  );

  const navigate = useNavigate();

  useEffect(() => {
    let animationFrameId;

    const onTimesUp = () => {
      cancelAnimationFrame(animationFrameId);
    };

    const startTimer = (startTime) => {
      const now = Date.now();
      const timePassed = now - startTime;
      const timeLeft = Math.max(TIME_LIMIT * 1000 - timePassed, 0);

      setTimeLeft(Math.ceil(timeLeft / 1000));
      setRemainingPathColor(timeLeft / 1000);

      if (timeLeft > 0) {
        animationFrameId = requestAnimationFrame(() => startTimer(startTime));
      } else {
        onTimesUp();
        alert("시간이 초과되었어요!");
        navigate("/score");
      }
    };

    const startTime = Date.now();
    animationFrameId = requestAnimationFrame(() => startTimer(startTime));

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    return `${minutes}:${seconds}`;
  };

  const calculateTimeFraction = () => {
    const rawTimeFraction = timeLeft / TIME_LIMIT;
    return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
  };

  const setCircleDasharray = () => {
    const circleDasharray = `${(
      calculateTimeFraction() * FULL_DASH_ARRAY
    ).toFixed(0)} 283`;
    return circleDasharray;
  };

  return (
    <S.Counter>
      <div className="base-timer">
        <svg
          className="base-timer__svg"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="base-timer__circle">
            <circle
              className="base-timer__path-elapsed"
              cx="50"
              cy="50"
              r="45"
            ></circle>
            <path
              id="base-timer-path-remaining"
              strokeDasharray={setCircleDasharray()}
              className={`base-timer__path-remaining ${remainingPathColor}`}
              d={`
            M 50, 50
            m -45, 0
            a 45,45 0 1,0 90,0
            a 45,45 0 1,0 -90,0
            `}
            ></path>
          </g>
        </svg>
        <span id="base-timer-label" className="base-timer__label">
          {formatTime(timeLeft)}
        </span>
      </div>
    </S.Counter>
  );
};

export default Timer;
