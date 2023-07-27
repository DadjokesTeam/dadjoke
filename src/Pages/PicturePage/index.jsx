import * as S from "./style";
import { Correct } from "../../components";
import React, { useState, useEffect } from "react";
const PicturePage = () => {
  const correct = [
    { component: Correct, id: 1 },
    { component: Correct, id: 2 },
    { component: Correct, id: 3 },
    { component: Correct, id: 4 },
    { component: Correct, id: 5 },
    { component: Correct, id: 6 },
    { component: Correct, id: 7 },
    { component: Correct, id: 8 },
    { component: Correct, id: 9 },
    { component: Correct, id: 10 },
    { component: Correct, id: 11 },
    { component: Correct, id: 12 },
    { component: Correct, id: 13 },
    { component: Correct, id: 14 },
  ];
  const [score, setScore] = useState(0);
  const handleScoreUpdate = (amount) => {
    setScore((prevScore) => prevScore + amount);
  };

  return (
    <S.PicturePage>
      <S.Container>
        <S.Score>score : {score}</S.Score>
        <S.ImgContainer>
          <img src="imgs/옴팡이.png" alt="옴팡이" />
        </S.ImgContainer>
        <S.ImgPicker>
          {correct.map(({ component: Component, id }) => {
            return (
              <Component
                id={id}
                className={`number${id}`}
                key={id}
                onScoreUpdate={handleScoreUpdate}
              />
            );
          })}
        </S.ImgPicker>
      </S.Container>
    </S.PicturePage>
  );
};

export default PicturePage;
