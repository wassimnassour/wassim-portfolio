import styled from "styled-components";

export const BlogSectionWrapper = styled.div`
  width: 60%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* Laptop Version  */
  @media (max-width: ${({ theme }) => theme.breakpoint_L}) and (min-width: ${({
      theme,
    }) => theme.breakpoint_T}) {
    width: 68%;
  }
  /* Tablet Version */
  @media (max-width: ${({ theme }) => theme.breakpoint_T}) {
    width: 76%;
  }
`;

export const PostWrapper = styled.article`
  font-size: 3rem;
  height: 445px;
  width: 100%;
  margin: 4rem 0;
  background: ${({ theme }) => theme.color__gray__dark};
  color: ${({ theme }) => theme.color__white};
  border-radius:.8rem;
  overflow: hidden;
  .gatsby-image-wrapper {
    height: 70%;
  }
  .box-text {
    height: 27%;
    overflow: hidden;
    padding: 1.3rem 1.3rem 0;
    width: 100%;
    p {
      font-size: 1.2rem;
      color: grey;
    }
    h1 {
      font-size: 2.35rem;
      margin: 0.6rem 0;
    }
  }
  /*tablete Version */
  @media (max-width: ${({ theme }) => theme.breakpoint_T}) {
    height: 360px;
    border-radius: 6px;
    a {
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: space-between;
      height: 100%;
      flex-direction: column;
      .box-text {
        display: flex;
        flex-direction: column;
        height: 44%;
        h1 {
          margin: 0.1rem 0;
          font-size: 1.8rem;
        }
        p {
          font-size: 1.2rem;
          color: #ababab;
          margin: 0.4rem 0;
        }
      }

      .gatsby-image-wrapper {
        height: 100%;
        width: 100%;
        border-radius: 6px;
      }
    }
  }

  /*mobile Version */
  @media (max-width: ${({ theme }) => theme.breakpoint_M}) {
    margin: 2.9rem 0;
    a {
      .box-text {
        height: unset;
        height: 55%;
        h1 {
          font-size: 1.7rem;
        }
        p {
          font-size: 1.12rem;
          color: #ababab;
          margin: 0.4rem 0;
        }
      }
    }
  }
`;
