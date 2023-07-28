import * as S from "./style";
import data from "../../data/data.json";
import { Input } from "@chakra-ui/react";
import { Button } from "../../components";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Quiz = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [showHint, setShowHint] = useState(false);
  const [input, setInput] = useState("");
  const [score, setScore] = useState(0);

  useEffect(() => {
    const savedScore = localStorage.getItem("score");
    if (savedScore !== null) {
      setScore(Number(savedScore));
    }
  }, []);

  useEffect(() => {
    localStorage.clear();
    localStorage.setItem("score", score);
  }, [score]);

  const clickHint = () => setShowHint((prev) => !prev);

  const checkAnswer = () => {
    const currentQuiz = data.find(
      (quiz) =>
        quiz.level === Number(params.levelId) &&
        quiz.id === Number(params.quizId)
    );

    if (!currentQuiz) {
      alert("문제를 찾을 수 없습니다.");
      return;
    }

    if (currentQuiz.answer === input) {
      alert("정답입니다!");
      const nextLevelId =
        params.quizId === "10" ? Number(params.levelId) + 1 : params.levelId;
      const nextQuizId =
        params.quizId === "10" ? "1" : String(Number(params.quizId) + 1);

      if (params.levelId === "3" && params.quizId === "10") {
        return navigate("/score");
      } else {
        navigate(`/quiz/${nextLevelId}/${nextQuizId}`);
      }

      if (currentQuiz.level === 1) {
        setScore((prevScore) => prevScore + 2);
      } else if (currentQuiz.level === 2) {
        setScore((prevScore) => prevScore + 5);
      } else {
        setScore((prevScore) => prevScore + 10);
      }
    } else {
      alert("틀렸습니다.");
      const nextLevelId =
        params.quizId === "10" ? Number(params.levelId) + 1 : params.levelId;
      const nextQuizId =
        params.quizId === "10" ? "1" : String(Number(params.quizId) + 1);
      navigate(`/quiz/${nextLevelId}/${nextQuizId}`);
    }

    setShowHint(false);
    setInput("");
  };

  const currentQuiz = data.find(
    (quiz) =>
      quiz.level === Number(params.levelId) && quiz.id === Number(params.quizId)
  );

  return (
    <S.Main>
      <S.Container>
        {currentQuiz && (
          <S.QuizContainer key={currentQuiz.id}>
            <S.Title>
              점수 : {score}
              <S.Level>Level {currentQuiz.level}</S.Level>
              <br />
              {currentQuiz.id}. {currentQuiz.desc}
            </S.Title>
            <S.InputContainer>
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="정답을 입력해주세요"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    checkAnswer();
                  }
                }}
              />
              <Button
                width="80px"
                height="10px"
                fontSize="16px"
                content="확인"
                onClick={checkAnswer}
              />
            </S.InputContainer>
            <Button
              width="100px"
              height="40px"
              fontSize="20px"
              content="힌트"
              onClick={clickHint}
            />
            <S.Hint>{showHint && currentQuiz.hint}</S.Hint>
          </S.QuizContainer>
        )}
      </S.Container>
    </S.Main>
  );
};

export default Quiz;
