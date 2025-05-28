import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

export const StyledGeneralContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${COLORS.darkBlue};
`;

export const StyledCardContainer = styled.div`
  background-color: ${COLORS.darkGrayishBlue};
  border-radius: 10px;
  padding: 32px;
  text-align: center;
  width: 90%;
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);

  @media (min-width: 768px) {
    width: 540px;
  }
`;

export const StyledCardHeader = styled.span`
  color: ${COLORS.neonGreen};
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;
export const StyledCardTitle = styled.span`
  color: ${COLORS.lightCyan};
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 24px;
`;
export const StyledDivitionAsset = styled.div`
  width: 100%;
  height: 16px;
  margin-bottom: 24px;
  background-image: url('/images/pattern-divider-mobile.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  @media (min-width: 768px) {
    background-image: url('/images/pattern-divider-desktop.svg');
  }
`;
export const StyledCardButton = styled.button`
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
  background-color: ${COLORS.neonGreen};
  border: none;
  margin-inline: auto;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  /* &:hover {
    opacity: 0.8;
  } */
`;

export const StyledDiceImage = styled.img`
  width: 24px;
  height: 24px;
`;
