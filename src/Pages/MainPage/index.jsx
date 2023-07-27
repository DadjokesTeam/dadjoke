import * as S from "./style";
import { Link } from "react-router-dom";
import { Button } from "../../components";
const Main = () => {
  return (
    <S.Main>
      <S.Container>
        <S.ContentBox>
          <S.Title>게임을 하고 싶다고?</S.Title>
          <img
            alt="img"
            src="https://3.bp.blogspot.com/-vhleHc_Y0l8/WDwIGr1Um6I/AAAAAAALmww/1n6-7t8Am3Y3Y7NG5nQtQ6TGD4N5Ah3EgCLcB/s1600/AS001885_00.gif"
          />
          <Link to="/select">
            <Button
              width="300px"
              height="100px"
              fontSize="30px"
              content="시작하기"
            />
          </Link>
        </S.ContentBox>
      </S.Container>
    </S.Main>
  );
};
export default Main;
