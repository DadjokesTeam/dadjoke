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
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const QuizContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const Title = styled.h1`
  font-family: "DungGeunMo";
  font-size: 32px;
  color: black;
  text-align: center;
  border: 3px solid black;
  box-shadow: 2px 2px 0px rgba(0, 0, 0, 1);
`;

export const Level = styled.h1`
  font-family: "DungGeunMo";
  font-size: 40px;
  color: black;
  text-align: center;
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  gap: 8px;
`;

export const Hint = styled.p`
  position: absolute;
  bottom: 160px;
  font-family: "DungGeunMo";
  font-size: 32px;
  color: black;
  text-align: center;
`;
