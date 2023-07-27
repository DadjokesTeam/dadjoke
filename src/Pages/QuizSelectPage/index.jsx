import * as S from './style';
import * as C from '../../components';
import { Link } from 'react-router-dom';

const Quiz = () => {
  const arr = [
    { id: 1, content: 'level 1' },
    { id: 2, content: 'level 2' },
    { id: 3, content: 'level 3' },
  ];

  return (
    <S.Main>
      <S.Container>
        <S.Title>단계를 선택해주세요</S.Title>
        <S.ButtonContainer>
          {arr.map(({ id, content }) => {
            return (
              <Link to={`/quiz/${id}/1`}>
                <C.Button content={content} />
              </Link>
            );
          })}
        </S.ButtonContainer>
      </S.Container>
    </S.Main>
  );
};

export default Quiz;
