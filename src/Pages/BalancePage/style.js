import styled from 'styled-components';

export const Main = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;
export const Container = styled.div`
  background-color: #81bef7;
  width: 800px;
  height: 100vh;
  display: flex;
  justify-content: center;
  gap: 80px;
`;

export const Title = styled.h1`
  font-family: 'DungGeunMo';
  width: 400px;
  font-size: 32px;
  color: white;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #628eff;
  text-align: center;
  margin-top: 150px;
`;

export const OptionContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
  bottom: 200px;

  .vs {
    font-size: 60px;
    font-weight: 700;
    color: #fff;
  }
`;

export const Option = styled.div`
  width: 200px;
  height: 300px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-size: 30px;
  font-weight: 600;
  cursor: pointer;
`;
