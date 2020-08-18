import styled, { css } from "styled-components";
import { Link } from "gatsby";
export const blueButton = css`
  background-color: ${({ theme }) => theme.color__primary};
  border: 1.3px solid #3a3a3a;

  color: ${({ theme }) => theme.color__white};
`;

export const BlackButton = css`
  background-color: #212121;
  color: white;
`;

const cheeckColor = props => {
  if (props.color === "blue") {
    return blueButton;
  }
  return BlackButton;
};
export const ButtonWrapper = styled(Link)`
  display: block;
  text-align: center;
  text-decoration: none;
  font-weight: 400;

  min-width: 130px;
  margin: 1rem;
  font-size: 1.5rem;
  box-shadow: 0 10px 10px -8px rgba(0, 0, 0, 0.78);
  border-radius: 1.2rem;
  padding: 1rem 1rem;
  margin-left: 0;
  &:hover {
    /* background-color: ${({ theme }) => theme.color__primary}; */
    color: white;
    transform: scale(1.02) translateY(-0.1rem);
    transition: transform 0.2s ease-out;
    background:${({ theme }) => theme.color__primary__2};
  }
  ${cheeckColor}
`;
