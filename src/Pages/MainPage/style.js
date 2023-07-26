import styled from "styled-components";
export const Main = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;
export const Container = styled.div`
  background-color: #81bef7;
  width: 600px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
  -webkit-text-stroke-color: #628eff;
  text-align: center;
`;
export const ContentBox = styled.div`
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const Button = styled.button`
  font-family: "DungGeunMo";
  font-size: 30px;
  width: 300px;
  height: 100px;
  background-color: white;
  line-height: 1.4;
  padding-left: 0rem;
  padding-right: 0rem;
  padding-top: 1.125rem;
  padding-bottom: 1.125rem;
  min-height: 4.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  border-width: 2px;
  border-style: solid;
  background-color: #628eff;
  border-color: #000000;
  flex-direction: column;
  box-shadow: 2px 2px 0px rgba(0, 0, 0, 1);
`;
