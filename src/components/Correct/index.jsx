import React, { useState, useEffect } from "react";
import * as S from "./style";

const Correct = (props) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    alert("정답입니다 !");
    setIsVisible(false);
    props.onScoreUpdate(5);
  };

  return (
    <div>
      {isVisible && (
        <S.Correct
          onClick={handleClick}
          className={props.className}
        ></S.Correct>
      )}
    </div>
  );
};

export default Correct;
