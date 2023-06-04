import { StyledButtonsContainer, StyledButton } from './FeedbackOptions.styled';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <StyledButtonsContainer>
      {options.map((buttonName, i) => {
        return (
          <StyledButton
            onClick={evt => onLeaveFeedback(evt.target.textContent)}
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
