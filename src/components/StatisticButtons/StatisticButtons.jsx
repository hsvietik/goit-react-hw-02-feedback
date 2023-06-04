import {
  StyledButtonsContainer,
  StyledButton,
} from './StatisticButtons.styled';
export const StatisticButtons = ({ buttons, statisticsCounter }) => {
  return (
    <StyledButtonsContainer>
      {buttons.map((buttonName, i) => {
        return (
          <StyledButton
            onClick={evt => statisticsCounter(evt.target.textContent)}
            type="button"
            key={i}
          >
            {buttonName}
          </StyledButton>
        );
      })}
    </StyledButtonsContainer>
  );
};
