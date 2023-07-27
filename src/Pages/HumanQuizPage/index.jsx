import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Input } from "@chakra-ui/react";
import { Button } from '../../components';
import * as S from "./style";

const HumanQuiz = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [input, setInput] = useState();
  const [currentImage, setCurrentImage] = useState("");
  const [answer, setAnswer] = useState("");

  const imageNames = [
    "김민재.png",
    "김원욱.png",
    "전예빈.png",
    "변도진.jpg",
    "최민욱.png",
    "김종한.jpg",
    "양승권.jpg",
    "오영기.png",
  ];

  const checkAnswer = ({ answer }) => {
    if (answer === input) {
      if (params.humanNum === "8") {
        return navigate("/score");
      }
      navigate(`/human/${Number(params.humanNum) + 1}`);
    } else alert("틀렸습니다");
    setInput("");
  };

  useEffect(() => {
    if (
      params.humanNum &&
      Number(params.humanNum) >= 1 &&
      Number(params.humanNum) <= imageNames.length
    ) {
      setCurrentImage(`/imgs/${imageNames[Number(params.humanNum) - 1]}`);
      setAnswer(imageNames[Number(params.humanNum) - 1].split(".")[0]);
    } else {
      setCurrentImage("");
    }
  }, [params.humanNum]);

  return (
    <S.Container>
      <S.Title>우리학교 인물퀴즈</S.Title>
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
        />
        <Button
          width="100px"
          height="50px"
          fontSize="20px"
          content="확인"
          onClick={() => checkAnswer({ answer })}
        />
      </S.InputContainer>
    </S.Container>
  );
};

export default HumanQuiz;
