import styled from "styled-components";

export const Header = styled.div`
  width: 100vw;
  position: absolute;
  display: flex;
  justify-content: center;
`;

export const HeaderContainer = styled.div`
  height: 50px;
  background-color: aliceblue;
  width: 800px;
  position: fixed;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;

  span {
    font-family: "DungGeunMo";
    font-size: 20px;
  }
`;
