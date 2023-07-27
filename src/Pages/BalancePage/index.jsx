import * as S from './style';
import * as C from '../../components';
import data from '../../data/balance.json';
import { useParams, useNavigate } from 'react-router-dom';

const Balance = () => {
  const params = useParams();
  const navigate = useNavigate();

  const checkAnswer = (option, answer) => {
    if (answer === option) {
      if (params.id === '10') {
        navigate('/score');
        return;
      }
      navigate(`/balance/${Number(params.id) + 1}`);
    } else {
      alert('땡!');
    }
  };
  return (
    <S.Main>
      <S.Container>
        {data
          .filter(({ id }) => id === Number(params.id))
          .map(({ desc, option1, option2, answer, id }) => {
            return (
              <>
                <S.Title>{desc}</S.Title>
                <S.OptionContainer>
                  <S.Option onClick={() => checkAnswer(option1, answer, id)}>
                    {option1}
                  </S.Option>
                  <p className="vs">vs</p>
                  <S.Option onClick={() => checkAnswer(option2, answer, id)}>
                    {option2}
                  </S.Option>
                </S.OptionContainer>
              </>
            );
          })}
      </S.Container>
    </S.Main>
  );
};

export default Balance;
