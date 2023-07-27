import * as S from './style';
import { Button } from '../../components';
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
              <div key={id}>
                <Link to={`/quiz/${id}/1`}>
                  <Button
                    width="300px"
                    height="100px"
                    content={content}
                    fontSize="30px"
                  />
                </Link>
              </div>
            );
          })}
        </S.ButtonContainer>
      </S.Container>
    </S.Main>
  );
};

export default Quiz;
