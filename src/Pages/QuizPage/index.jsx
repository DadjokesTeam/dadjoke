import * as S from './style';
import * as C from '../../components';
import data from '../../data/data.json';
import { Input } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';

const Quiz = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [showHint, setShowHint] = useState(false);
  const [input, setInput] = useState('');
  const clickHint = () => setShowHint((prev) => !prev);

  const checkAnswer = ({ answer }) => {
    if (answer === input) {
      if (params.levelId === '3' && params.quizId === '10') {
        return navigate('/score');
      }
      navigate(
        `/quiz/${
          params.quizId === '10' ? Number(params.levelId) + 1 : params.levelId
        }/${
          params.quizId === '10'
            ? (params.quizId = '1')
            : Number(params.quizId) + 1
        }`
      );
    } else alert('틀렸습니다');
    setShowHint(false);
    setInput('');
  };

  return (
    <S.Main>
      <S.Container>
        {data
          .filter(({ level }) => level === Number(params.levelId))
          .filter(({ id }) => id === Number(params.quizId))
          .map(({ id, desc, level, hint, answer }) => {
            return (
              <S.QuizContainer>
                <S.Title>
                  <S.Level>Level {level}</S.Level>
                  <br />
                  {id}. {desc}
                </S.Title>
                <S.InputContainer>
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="정답을 입력해주세요"
                  />
                  <S.Button onClick={() => checkAnswer({ answer })}>
                    입력
                  </S.Button>
                </S.InputContainer>
                <S.Button onClick={clickHint}>힌트</S.Button>
                <S.Hint>{showHint && hint}</S.Hint>
              </S.QuizContainer>
            );
          })}
      </S.Container>
    </S.Main>
  );
};

export default Quiz;