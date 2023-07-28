// HumanQuiz.js

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Input } from "@chakra-ui/react";
import { Button } from "../../components";
import * as S from "./style";

const HumanQuiz = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [input, setInput] = useState("");
  const [currentImage, setCurrentImage] = useState("");
  const [score, setScore] = useState(0);

  const imageNames = [
    "김민재.png",
    "김원욱.png",
    "전예빈.png",
    "이현준 김종한.jpg",
    "변도진.jpg",
    "이태훈.jpg",
    "최민욱.png",
    "정민서 서주미.jpg",
    "양승권.jpg",
    "이정우.jpg",
    "오영기.png",
  ];

  const answers = [
    ["김민재"],
    ["김원욱"],
    ["전예빈"],
    ["이현준", "김종한", "이현준 김종한"],
    ["변도진"],
    ["이태훈"],
    ["최민욱"],
    ["정민서", "서주미", "정민서 서주미"],
    ["양승권", "알감자"],
    ["이정우"],
    ["오영기"],
  ];
  const checkAnswer = () => {
    setScore((prev) => prev + 5);
    if (answers[params.humanNum - 1].includes(input)) {
      if (params.humanNum === "11") {
        return navigate("/score");
      }
      navigate(`/human/${Number(params.humanNum) + 1}`);
    } else {
      navigate(`/human/${Number(params.humanNum) + 1}`);
    }
    setInput("");
  };

  useEffect(() => {
    if (
      params.humanNum &&
      Number(params.humanNum) >= 1 &&
      Number(params.humanNum) <= imageNames.length
    ) {
      setCurrentImage(`/imgs/${imageNames[Number(params.humanNum) - 1]}`);
    } else {
      setCurrentImage("");
    }
  }, [params.humanNum]);

  return (
    <S.Container>
      <S.Title>우리학교 인물퀴즈</S.Title>
      <S.Score>{score}</S.Score>
      <S.ImgContainer>
        {currentImage && (
          <img
            src={currentImage}
            alt={currentImage}
            style={{ width: "300px", height: "300px", objectFit: "fill" }}
          />
        )}
      </S.ImgContainer>
      <S.ImgTitle> 대부분의 사진은 허락을 받지 않았습니다 ^^ </S.ImgTitle>
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
          width="100px"
          height="50px"
          fontSize="20px"
          content="확인"
          onClick={() => checkAnswer()}
        />
      </S.InputContainer>
    </S.Container>
  );
};

export default HumanQuiz;
