import React from "react";
import { Button } from "../../components";
import { Link } from "react-router-dom";
import * as S from "./style";

const Select = () => {
  return (
    <S.Container>
      <S.SelectTitle>원하시는 게임을 선택해주세요!</S.SelectTitle>
      <img src="https://noiseandkisses.com/apps/note/wp-content/uploads/2023/03/menu_cinamon.png" />
      <S.ButtonContainer>
        <Link to="/quiz">
          <Button content="아재개그 퀴즈 하기" />
        </Link>
        <S.SelectMessage>or</S.SelectMessage>
        <Link to="/find">
          <Button content="틀린그림찾기 하기" />
        </Link>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default Select;
