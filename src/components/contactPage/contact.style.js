import styled from "styled-components";

export const ContactPageContainer = styled.div`
  height: auto;
  flex-wrap: wrap;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin: 8rem 0 0;
  .section1 {
    width: 350px;
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
      margin: 0 0.4rem 1.2rem;
    }

    .icon {
      color: ${({ theme }) => theme.color__primary};
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

  h2 {
    font-size: 2rem;
    margin-top: 0;
    margin-bottom: 0;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  .error {
    font-size: 1.3rem;
    color: red;
    margin: 0.1rem 0 0.8rem;
  }
  .succes {
      font-size: 1.3rem;
    color: green;
    text-align: left;
    padding: 1rem 0;
    box-shadow: 1px 1px 34px -25px #6c757d;
}
  }

  input {
    &:focus {
      background: ${({ theme }) => theme.color__background};
    }

    background-color: ${({ theme }) => theme.color__background};
    margin: 1.3rem 0;
    color: ${({ theme }) => theme.color__text};
    padding: 1rem 0.8rem;
    outline: none;
    box-shadow: 0 4px 10px -8px rgba(0, 0, 0, 0.78);
    border: 1px solid #6c757d;
    font-size: 1.5rem;
    font-family: inherit;
    ::placeholder {
      color: ${({ theme }) => theme.color__gray};
    }
  }
  textarea {
    background-color: ${({ theme }) => theme.color__background};
    margin: 1.3rem 0;
    color: ${({ theme }) => theme.color__text};
    padding: 1rem 0.8rem;
    outline: none;
    box-shadow: 0 4px 10px -8px rgba(0, 0, 0, 0.78);
    border: 1px solid #6c757d;
    font-size: 1.5rem;
    font-family: inherit;
    height: 320px;
    ::placeholder {
      color: ${({ theme }) => theme.color__gray};
    }
  }
  button {
    background-color: ${({ theme }) => theme.color__background};
    margin: 1.3rem 0;
    color: ${({ theme }) => theme.color__text};
    padding: 1rem 0.8rem;
    outline: none;
    box-shadow: 0 4px 10px -8px rgba(0, 0, 0, 0.78);
    border: 1px solid #6c757d;
    font-size: 1.5rem;
    font-family: inherit;
    ::placeholder {
      color: ${({ theme }) => theme.color__gray};
    }
    width: 219px;
    :hover {
      color: white;
      transform: scale(1.02) translateY(-0.1rem);
      transition: transform 0.2s ease-out;
      background: ${({ theme }) => theme.color__primary__2};
    }
  }
`;
