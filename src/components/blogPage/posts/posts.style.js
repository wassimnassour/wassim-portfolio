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
  /* Laptop Version  */
  @media (max-width: ${({ theme }) => theme.breakpoint_L}) and (min-width: ${({
      theme,
    }) => theme.breakpoint_T}) {
    width: 80%;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint_T}) {
    width: 88%;
  }
`;

export const PostWrapper = styled.article`
  font-size: 3rem;

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
  /*tablete Version */
  @media (max-width: ${({ theme }) => theme.breakpoint_T}) {
    height: 264px;
    border-radius: 6px;

    a {
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: space-between;
      height: 100%;

      .box-text {
        height: unset;
        width: 65%;
        display: flex;
        flex-direction: column;
        height: 90%;
        h1 {
          margin: 0.4rem 0;
          font-size: 2rem;
        }
        p {
          font-size: 1.4rem;
          color: #ababab;
          margin: 0.4rem 0;
        }
      }

      .gatsby-image-wrapper {
        height: 100%;
        width: 40%;
        border-radius: 6px;
      }
    }
  }
  /*mobile Version */
  @media (max-width: ${({ theme }) => theme.breakpoint_M}) {
    height: 225px;

    margin: 2.9rem 0;

    a {
      .box-text {
        height: unset;
        width: 65%;

        height: 90%;
        h1 {
          margin: 0.4rem 0;
          font-size: 1.8rem;
        }
        p {
          font-size: 1.3rem;
          color: #ababab;
          margin: 0.4rem 0;
        }
      }

      .gatsby-image-wrapper {
      }
    }
  }
`;
