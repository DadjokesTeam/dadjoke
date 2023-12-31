import styled from "styled-components";
export const Main = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;
export const Container = styled.div`
  width: 800px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-shadow: 1px 2px 0px black;
`;
export const TitleContainer = styled.div`
  width: 500px;
  height: 200px;
  background-color: white;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.h1`
  font-family: "DungGeunMo";
  font-size: 60px;
  color: white;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
  text-align: center;
`;
export const ContentBox = styled.div`
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
