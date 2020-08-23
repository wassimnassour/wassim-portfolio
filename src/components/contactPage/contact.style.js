import styled from "styled-components";

export const ContactPageContainer = styled.div`
  height: auto;
  flex-wrap: wrap;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin: 8rem 0 0;
  .section1 {
    width: 295px;
    display: flex;
    flex-direction: column;
    margin: 3rem 3rem 0.6rem 0;

    justify-content: flex-start;

    .box-wrapper {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      height: 8rem;
      border: 1px solid #6c757d;
      margin: 0 0.4rem 0.6rem;
    }

    .icon {
      color: ${({ theme }) => theme.color__text};
      font-size: 4rem;
      margin-right: 1rem;
      padding: 2rem;
    }
    .text {
      color: ${({ theme }) => theme.color__text};
      font-size: 2rem;
      font-weight: 600;
    }
  }
`;
export const FormContainer = styled.div`
  width: 455px;
  height: 537px;
  h2 {
    font-size: 2rem;
    margin-top: 0;
    margin-bottom: 7px;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  & > * :not(a) {
    background-color: ${({ theme }) => theme.color__background};
    margin: 1.3rem 0;
    color: ${({ theme }) => theme.color__text};
    padding: 1rem 0.8rem;
    outline: none;
    box-shadow: 0 10px 10px -8px rgba(0, 0, 0, 0.78);
    border: 1px solid #6c757d;
    font-size: 1.5rem;
    font-family: inherit;
    ::placeholder {
      color: ${({ theme }) => theme.color__gray};
    }
  }
  & > :first-child {
    margin: 0 0 1.3rem;
  }
  & > :nth-last-child(2) {
    height: 300px;
  }
  a {
    width: 219px;
    :hover {
      background: ${({ theme }) => theme.color__primary__2};
    }
  }
`;
