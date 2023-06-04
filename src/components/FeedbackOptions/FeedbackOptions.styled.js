import styled from '@emotion/styled';
export const StyledButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;
export const StyledButton = styled.button`
  min-width: 75px;
  padding: 5px;
  cursor: pointer;
  border-radius: 6px;
  background-color: white;
  font-size: 20px;
  line-height: 1.5;
  text-transform: capitalize;
  &:hover,
  &:focus {
    background-color: yellow;
  }
`;
