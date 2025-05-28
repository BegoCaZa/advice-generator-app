import { useEffect, useState } from 'react';
import {
  StyledCardButton,
  StyledCardContainer,
  StyledCardHeader,
  StyledCardTitle,
  StyledDivitionAsset,
  StyledGeneralContainer,
  StyledDiceImage
} from './advice.styles';

const Advice = () => {
  const [advice, setAdvice] = useState('');
  // getAdvice();
  // console.log(advice);

  useEffect(() => {
    getAdvice(setAdvice);
  }, []);

  return (
    <StyledGeneralContainer>
      <StyledCardContainer>
        <StyledCardHeader>ADVICE #{advice?.slip?.id} </StyledCardHeader>

        <StyledCardTitle>{advice?.slip?.advice}</StyledCardTitle>
        <StyledDivitionAsset />
        <StyledCardButton onClick={() => getAdvice(setAdvice)}>
          <StyledDiceImage src='/images/icon-dice.svg' />
        </StyledCardButton>
      </StyledCardContainer>
    </StyledGeneralContainer>
  );
};

const getAdvice = async setAdvice => {
  try {
    const response = await fetch('https://api.adviceslip.com/advice');
    const advices = await response.json();
    setAdvice(advices);
  } catch (error) {
    console.log(error);
  }
};

export default Advice;
