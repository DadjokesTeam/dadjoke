import * as S from "./style";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <S.Header>
      <S.HeaderContainer>
        <Link to="/" className="Home">
          <span>홈</span>
        </Link>
        <Link to="/quiz" className="Quiz">
          <span>아재개그</span>
        </Link>
        <Link to="/picture" className="Picture">
          <span>틀린그림찾기</span>
        </Link>
        <Link to="/balance/1" className="Picture">
          <span>밸런스 게임</span>
        </Link>
        <Link to="/human/1" className="Picture">
          <span>인물 퀴즈</span>
        </Link>
      </S.HeaderContainer>
    </S.Header>
  );
};
export default Header;
