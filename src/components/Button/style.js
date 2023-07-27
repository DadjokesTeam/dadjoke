import styled from "styled-components";

export const Button = styled.div`
  font-family: "DungGeunMo";
  font-size: ${(props) => props.fontSize};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
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
  z-index: 1;
  position: relative;
  background: linear-gradient(90deg, #c0fbff 0%, #6cabe4 48.96%, #c0fbff 100%);
  background-size: 200% 200%;
  &:hover {
    animation: gradient 2s ease infinite;
  }
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
