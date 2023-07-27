import React, { useState } from "react";
import * as S from "./style";

const Correct = (props) => {
  const [isVisible, setIsVisible] = useState(true);
  const [backgroundColor, setBackgroundColor] = useState(""); // Default background color (white)

  const handleClick = () => {
    alert("정답입니다 !");
    setIsVisible(false);
    setBackgroundColor("red"); // Change the background color to green (you can use any color you want)
    props.onCorrectClick(props.id); // Use the onCorrectClick prop instead of onScoreUpdate
  };

  return (
    <div>
      <S.Correct
        onClick={handleClick}
        className={props.className}
        style={{ backgroundColor: backgroundColor }} // Set the background color dynamically
      ></S.Correct>
    </div>
  );
};

export default Correct;
