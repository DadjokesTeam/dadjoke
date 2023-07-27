import * as S from "./style";
import data from "../../data/data.json";
import { Input } from "@chakra-ui/react";
import { Button } from "../../components";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

const Quiz = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [showHint, setShowHint] = useState(false);
  const [input, setInput] = useState("");
  const clickHint = () => setShowHint((prev) => !prev);
  const [score, setScore] = useState(0);

  const checkAnswer = ({ answer }) => {
    if (answer === input) {
      alert("정답입니다!");
      if (params.levelId === "3" && params.quizId === "10") {
        return navigate("/score");
      }
      navigate(
        `/quiz/${
          params.quizId === "10" ? Number(params.levelId) + 1 : params.levelId
        }/${
          params.quizId === "10"
            ? (params.quizId = "1")
            : Number(params.quizId) + 1
        }`
      );
      setScore((prevScore) => prevScore + 2);
      window.localStorage.setItem("quizScore", score);
    } else {
      alert("틀렸습니다");
      navigate(
        `/quiz/${
          params.quizId === "10" ? Number(params.levelId) + 1 : params.levelId
        }/${
          params.quizId === "10"
            ? (params.quizId = "1")
            : Number(params.quizId) + 1
        }`
      );
    }

    setShowHint(false);
    setInput("");
  };

  return (
    <S.Main>
      <S.Container>
        {data
          .filter(({ level }) => level === Number(params.levelId))
          .filter(({ id }) => id === Number(params.quizId))
          .map(({ id, desc, level, hint, answer }) => {
            return (
              <S.QuizContainer key={id}>
                <S.Title>
                  점수 : {score}
                  <S.Level>Level {level}</S.Level>
                  <br />
                  {id}. {desc}
                </S.Title>
                <S.InputContainer>
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="정답을 입력해주세요"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        checkAnswer({ answer });
                      }
                    }}
                  />
                  <Button
                    width="80px"
                    height="10px"
                    fontSize="16px"
                    content="확인"
                    onClick={() => checkAnswer({ answer })}
                  />
                </S.InputContainer>
                <Button
                  width="100px"
                  height="40px"
                  fontSize="20px"
                  content="힌트"
                  onClick={clickHint}
                />
                <S.Hint>{showHint && hint}</S.Hint>
              </S.QuizContainer>
            );
          })}
      </S.Container>
    </S.Main>
  );
};

export default Quiz;
