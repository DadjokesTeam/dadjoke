import * as S from "./style";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
const Main = () => {
  return (
    <S.Main>
      <S.Container>
        <Card>
          <CardHeader />
          <CardBody>
            <S.Title>
              아재개그 세상에 <br />
              오신것을 환영합니다!
            </S.Title>
          </CardBody>
          <CardFooter />
        </Card>
        <img src="https://item.kakaocdn.net/do/35d21721120852d73f512b9bc17f36689f5287469802eca457586a25a096fd31" />
      </S.Container>
    </S.Main>
  );
};
export default Main;
