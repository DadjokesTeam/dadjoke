import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin: 0 auto;
  width: 600px;
  height: 100vh;
  background-color: #81bef7;

  img {
    width: 300px;
  }
`;

export const SelectTitle = styled.h3`
  font-family: "DungGeunMo";
  font-size: 35px;
  color: white;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #628eff;
  text-align: center;
`;

export const ButtonContainer = styled.div`
  margin-top: 20px;
`;

export const SelectMessage = styled.h6`
  margin-top: 10px;
  margin-bottom: 10px;
  color: white;
`;
