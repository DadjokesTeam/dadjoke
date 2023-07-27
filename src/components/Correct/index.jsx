import React, { useState, useEffect } from "react";
import * as S from "./style";

const Correct = (props) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    alert("정답입니다 !");
    setIsVisible(false);
    props.onCorrectClick(props.id); // Use the onCorrectClick prop instead of onScoreUpdate
  };

  return (
    <div>
      {isVisible && (
        <S.Correct onClick={handleClick} className={props.className}>
          {props.id}
        </S.Correct>
      )}
    </div>
  );
};

export default Correct;
