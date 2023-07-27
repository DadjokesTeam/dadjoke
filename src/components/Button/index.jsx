import * as S from "./style";
const Button = (props) => {
  return (
    <S.Button
      width={props.width}
      height={props.height}
      fontSize={props.fontSize}
      onClick={props.onClick}
      onKeyDown={props.onKeyDown}
    >
      {props.content}
    </S.Button>
  );
};
export default Button;
