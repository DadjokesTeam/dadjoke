import * as S from './style';
import { Correct } from '../../components';
import { Counter } from '../../components';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const PicturePage = () => {
  const navigate = useNavigate();
  const correctList = [
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
  const [correct, setCorrect] = useState(6);
  const [chance, setChance] = useState(10);

  const handleCorrectClick = (clickedId) => {
    correctList.forEach((item) => {
      if (item.id === clickedId) {
        item.component = null;
      }
    });
    setScore((prevScore) => prevScore + 5);
    setCorrect((prev) => prev - 1);
    if (correct === 0) {
      navigate('/score');
    }
  };
  const handleChance = () => {
    window.localStorage.setItem('score', score);
    setChance((prev) => prev - 1);
    setScore((prev) => prev - 2);
    if (chance === 0) {
      alert('모든 기회가 소진되었습니다');
      navigate('/score');
    }
  };
  return (
    <S.PicturePage>
      <S.Container>
        <S.Chance>남은 기회 : {chance}</S.Chance>
        <S.Score>score : {score}</S.Score>
        <S.ImgContainer>
          <img src="imgs/옴팡이.png" alt="옴팡이" />
        </S.ImgContainer>
        <S.ImgPicker onClick={handleChance}>
          {correctList.map(({ component: Component, id }) => {
            return (
              Component && (
                <Component
                  id={id}
                  className={`number${id}`}
                  key={id}
                  onCorrectClick={handleCorrectClick}
                />
              )
            );
          })}
        </S.ImgPicker>
        <Counter />
      </S.Container>
    </S.PicturePage>
  );
};

export default PicturePage;
