import React from 'react';
import { Button } from '../../components';
import { Link } from 'react-router-dom';
import * as S from './style';

const Select = () => {
  return (
    <S.Container>
      <S.SelectTitle>원하시는 게임을 선택해주세요!</S.SelectTitle>
      <S.ButtonContainer>
        <Link to="/quiz">
          <Button
            width="320px"
            height="100px"
            fontSize="30px"
            content="아재개그 퀴즈 하기"
          />
        </Link>
        <S.SelectMessage>or</S.SelectMessage>
        <Link to="/picture">
          <Button
            width="320px"
            height="100px"
            fontSize="30px"
            content="틀린그림찾기 하기"
          />
        </Link>
        <S.SelectMessage>or</S.SelectMessage>
        <Link to="/">
          <Button
            width="320px"
            height="100px"
            fontSize="30px"
            content="양자택일 게임"
          />
        </Link>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default Select;
