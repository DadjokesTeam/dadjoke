import styled from "styled-components";

export const Main = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;
export const Container = styled.div`
  width: 600px;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
`;

export const Title = styled.h1`
  font-family: "DungGeunMo";
  font-size: 40px;
  color: black;
  text-align: center;
`;

export const ButtonContainer = styled.div`
  width: 90%;
  height: 380px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
  color: #fff;
`;
