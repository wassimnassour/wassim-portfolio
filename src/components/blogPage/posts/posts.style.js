import styled from "styled-components";

export const PostContainer = styled.section`
  /* margin: 8.5rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // background: #2d2c2c;
  padding: 3rem 0;
  border: 1px solid black;

  a {
    align-self: center;
  } */
`;
export const BlogSectionWrapper = styled.div`
  width: 74%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PostWrapper = styled.article`
  font-size: 3rem;

  width: 94%;
  height: 495px;

  margin: 4rem 0;
  background: ${({ theme }) => theme.color__gray__dark};
  color: ${({ theme }) => theme.color__white};

  .gatsby-image-wrapper {
    height: 70%;
  }
  .box-text {
    height: 27%;
    overflow: hidden;
    padding: 1.3rem 1.3rem 0;
    p {
      font-size: 1.54rem;
    }
    h1 {
      font-size: 2.35rem;

      margin: 1.3rem 0;
    }
  }
`;
