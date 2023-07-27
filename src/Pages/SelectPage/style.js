import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin: 0 auto;
  width: 800px;
  height: 100vh;

  img {
    width: 300px;
  }
`;

export const SelectTitle = styled.h3`
  font-family: "DungGeunMo";
  font-size: 50px;
  color: black;
  text-align: center;
`;

export const ButtonContainer = styled.div`
  margin-top: 40px;
`;

export const SelectMessage = styled.h6`
  margin-top: 10px;
  margin-bottom: 10px;
  color: white;
`;
