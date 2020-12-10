import styled from "styled-components";

export const PostWrapper = styled.article`
  margin: 11rem auto;
  max-width: 850px;
  .title {
    text-align: left;
    font-weight: 800;
    font-size: 4.5rem;
    font-weight: 700;
    margin-bottom: 2rem;
  }
  .gif{
    width:100%;
    max-height:600px;
  }
  .gatsby-resp-image-wrapper{
   max-height:650px;
   max-width:850px !important ;
  }
  span {
    color: ${({ theme }) => theme.color__gray};
    font-size: 1.6rem;
    margin-bottom: 4rem;
    display: block;
  }
  .buttons {
    display: flex;
    justify-content: space-between;
    margin: 6rem 0;
    align-items: center;
    .right {
      justify-content: flex-end;
    }
    .left {
      justify-content: flex-start;
    }
    a {
      color: ${({ theme }) => theme.color__text};
      flex-basis: 44%;
      padding: 0.3rem;
      font-size: 1.5rem;
      display: flex;
      align-items: center;
      svg {
        font-size: 1.6rem;
        margin: 0 1.3rem;
      }
      .left-icon {
        transform: rotateY(-180deg);
      }

      .line {
        font-size: 2rem;
      }
    }
  }
  /* tablet Version  */
  @media (max-width: ${({ theme }) => theme.breakpoint_L}) {
    width: 80%;
    .title {
      font-size: 3.7rem;
    }
    span {
      font-size: 1.4rem;
    }
  }
  /* Mobile Version */
  @media (max-width: ${({ theme }) => theme.breakpoint_M}) {
    width: 86%;
    .title {
      font-size: 2.8rem;
      margin-bottom: 2.5rem;
    }
  }
`;
export const Comments = styled.div`
    margin-top: 7rem;
    margin-bottom: 0;
    width: 100%;
`;
export const H1 = styled.h1`
  font-size: 3rem;
  margin: 2rem 0;
`;
export const H2 = styled.h2`
  font-size: 2.3rem;
  margin: 2rem 0;
`;
export const H3 = styled.h3`
  font-size: 2rem;
  margin: 2rem 0;
`;
export const H4 = styled.h4`
  margin-top: 2rem;
  font-size: 1.8rem;
  margin-bottom: 0;
`;
export const P = styled.p`
  font-size: 1.7rem;
  letter-spacing: 0.3px;
  line-height: 2.7rem;

  @media (max-width: ${({ theme }) => theme.breakpoint_M}) {
    font-size: 1.4rem;
  }
`;
export const Li = styled.li`
  padding-left: 0;
  list-style: disc;
  font-size: 1.7rem;

  @media (max-width: ${({ theme }) => theme.breakpoint_M}) {
    font-size: 1.4rem;
  }
`;

export const Strong = styled.strong`
  font-size: inherit;
  color: ${({ theme }) => theme.color__primary};
`;

export const A = styled.a`
  font-size: inherit;
  color: ${({ theme }) => theme.color__primary};
`;
