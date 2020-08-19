import styled from "styled-components";

export const ProjectSectionContainer = styled.section`
  height: auto;
  margin: 2rem 0;
  padding: 2rem;

  display: flex;

  flex-direction: column;

  justify-content: center;

  align-items: center;
`;
export const ProjectWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  .project {
    background: #282828;
    height: 200px;
    width: 306px;
    font-size: 1.6rem;
  }
  h1 {
    font-size: 2rem;
    text-align: center;
    padding: 4rem;
  }

  span {
    font-size: 2rem;
  }
  .language {
    font-size: 2rem;
    color: yellow;
  }
`;
