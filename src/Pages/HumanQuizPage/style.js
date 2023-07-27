import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin: 0 auto;
  width: 800px;
  height: 100vh;
  background-color: #81bef7;
`;

export const Title = styled.h1`
  font-family: "DungGeunMo";
  font-size: 35px;
  color: white;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #628eff;
  text-align: center;
`;

export const ImgTitle = styled.h4`
  color: lightgray;
  margin-bottom: 1vh;

`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1vh;
  margin-bottom: 1vh;
  width: inherit;
  height: 300px;
  color: #81bef7;
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  gap: 8px;
`;
