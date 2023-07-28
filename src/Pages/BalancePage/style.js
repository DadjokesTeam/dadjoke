import styled from 'styled-components';

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
  gap: 80px;
`;

export const Title = styled.h1`
  font-family: 'DungGeunMo';
  width: 400px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  color: black;
  text-align: center;
  margin-top: 100px;
  border: 3px solid black;
  box-shadow: 2px 2px 0px rgba(0, 0, 0, 1);
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
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
    color: black;
    font-family: 'DungGeunMo';
  }
`;

export const Option = styled.div`
  width: 250px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-size: 30px;
  font-weight: 600;
  cursor: pointer;
  font-family: 'DungGeunMo';
  border: 3px solid black;
  box-shadow: 2px 2px 0px rgba(0, 0, 0, 1);
  color: white;
  -webkit-text-stroke-width: 0.1px;
  -webkit-text-stroke-color: black;
  &:hover {
    color: black;
    transition: all 0.3s;
  }
`;
