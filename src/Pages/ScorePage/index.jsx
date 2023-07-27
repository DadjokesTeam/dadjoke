import React, { useState } from 'react';
import * as S from './style';
import { Button } from '../../components';
import { Link } from 'react-router-dom';

const Score = ({ subject }) => {
  const [score, setScore] = useState(0);

  return (
    <S.Container>
      <S.MainTitle>당신의 {subject} 의 점수는</S.MainTitle>
      <S.Score>{score}</S.Score>
      <S.Congratuation></S.Congratuation>
      {score >= 150 ? (
        <S.Medal>🥇</S.Medal>
      ) : score >= 100 ? (
        <S.Medal>🥈</S.Medal>
      ) : (
        <S.Medal>🥉</S.Medal>
      )}
      <S.MedalTitle>당신이 받은 메달입니다! 축하드려요</S.MedalTitle>

      <Link to="/">
        <Button
          width="300px"
          height="100px"
          fontSize="30px"
          content="처음으로 돌아가기"
        />
      </Link>
    </S.Container>
  );
};

export default Score;
