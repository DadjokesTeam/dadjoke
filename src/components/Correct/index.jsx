import React, { useState } from "react";
import * as S from "./style";

const Correct = (props) => {
  const [isVisible, setIsVisible] = useState(true);
  const [backgroundColor, setBackgroundColor] = useState("");

  const handleClick = () => {
    alert("정답입니다 !");
    setIsVisible(false);
    setBackgroundColor("red");
    props.onCorrectClick(props.id);
  };

  return (
    <div>
      <S.Correct
        onClick={handleClick}
        className={props.className}
        style={{ backgroundColor: backgroundColor }}
      ></S.Correct>
    </div>
  );
};

export default Correct;
