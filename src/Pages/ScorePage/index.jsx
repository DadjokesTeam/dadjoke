import React, { useState } from "react";
import { Button } from "@chakra-ui/react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

const Score = ({ subject }) => {
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };
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
      <Button colorScheme="twitter" size="md" onClick={navigateToHome}>
        처음으로 돌아가기
      </Button>
    </S.Container>
  );
};

export default Score;
