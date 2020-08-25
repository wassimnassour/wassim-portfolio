import styled, { css } from "styled-components";
import { Link } from "gatsby";
export const blueButton = css`
  background-color: ${({ theme }) => theme.color__primary};
  color: ${({ theme }) => theme.color__white};
  box-shadow: 0 10px 10px -8px ${({ theme }) => theme.color__primary};
`;

export const BlackButton = css`
  color: ${({ theme }) => theme.color__text};
  border: 1px solid ${({ theme }) => theme.color__gray};
  box-shadow: 0 10px 10px -8px rgba(0, 0, 0, 0.78);
`;

const cheeckColor = props => {
  if (props.color === "blue") {
    return blueButton;
  }
  return BlackButton;
};
export const ButtonWrapper = styled(Link)`
  text-decoration: none;
  font-weight: 400;
  width: 175px;
  margin: 1rem;
  font-size: 1.5rem;

  border-radius: 1.2rem;
  padding: 1rem 1rem;
  margin-left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    color: white;
    transform: scale(1.02) translateY(-0.1rem);
    transition: transform 0.2s ease-out;
    background: ${({ theme }) => theme.color__primary__2};
  }
  ${cheeckColor}
`;
