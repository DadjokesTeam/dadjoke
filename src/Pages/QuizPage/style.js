import styled from 'styled-components';

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

export const QuizContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const Title = styled.h1`
  font-family: 'DungGeunMo';
  font-size: 32px;
  color: white;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #628eff;
  text-align: center;
`;

export const Level = styled.h1`
  font-family: 'DungGeunMo';
  font-size: 40px;
  color: white;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #628eff;
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

export const Button = styled.div`
  font-family: 'DungGeunMo';
  font-size: 18px;
  width: 80px;
  height: 40px;
  background-color: white;
  line-height: 1.4;
  padding-left: 0rem;
  padding-right: 0rem;
  padding-top: 1.125rem;
  padding-bottom: 1.125rem;
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
  cursor: pointer;
`;

export const Hint = styled.p`
  position: absolute;
  bottom: 200px;
  font-family: 'DungGeunMo';
  font-size: 32px;
  color: white;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #628eff;
  text-align: center;
`;
