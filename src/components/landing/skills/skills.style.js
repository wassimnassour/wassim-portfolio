import styled from "styled-components";

export const SkillsContainer = styled.section`
  height: auto;

  margin: 2rem 0;

  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 3rem;
    border-bottom: 1.6px solid ${({ theme }) => theme.color__primary};
    display: inline-block;
  }
  .skills {
    display: flex;
    margin: 0 2rem;
    justify-content: space-between;
    align-items: center;
    .skill {
      width: 30%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 1rem;
      h2 {
        font-size: 1.6rem;
        margin: 2rem;
      }
      img {
        width: 73%;
        height: 80%;
      }
    }
  }
`;
