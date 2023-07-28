import * as S from "./style";
import data from "../../data/balance.json";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

const Balance = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const checkAnswer = (option, answer) => {
    if (answer === option) {
      setScore((prev) => prev + 5);
    } else {
      setScore((prev) => prev - 5);
      alert("땡!");
    }
    if (params.id === "10") {
      navigate("/score");
      return;
    }
    navigate(`/balance/${Number(params.id) + 1}`);
  };
  return (
    <S.Main>
      <S.Container>
        {data
          .filter(({ id }) => id === Number(params.id))
          .map(({ desc, option1, option2, answer, id }) => {
            return (
              <S.ContentContainer key={id}>
                <S.Title>{desc}</S.Title>
                <S.Score>{score}</S.Score>
                <S.OptionContainer>
                  <S.Option onClick={() => checkAnswer(option1, answer, id)}>
                    {option1}
                  </S.Option>
                  <p className="vs">vs</p>
                  <S.Option onClick={() => checkAnswer(option2, answer, id)}>
                    {option2}
                  </S.Option>
                </S.OptionContainer>
              </S.ContentContainer>
            );
          })}
      </S.Container>
    </S.Main>
  );
};

export default Balance;
