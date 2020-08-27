import styled from "styled-components";
export const AboutPageContainer = styled.section``;

export const AboutPageWrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 2rem auto 2rem;

  .about__content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    height: auto;
    margin: 2rem auto 5rem;

    .gatsby-image-wrapper {
      width: 350px;
      margin: 2rem 6rem;
      height: 350px;
      border-radius: 350px;
      border: 5px solid ${({ theme }) => theme.color__primary};
    }
    .important__word {
      color: ${({ theme }) => theme.color__primary};
      font-weight: 700;
      font-size: 1.8rem;
    }

    p {
      width: 450px;
      text-align: center;
      font-size: 1.7rem;
      font-weight: 500;
    }
  }

  .about__contact {
    h2 {
      font-size: 2rem;
    }
    .icon {
      font-size: 3rem;
    }
    ul {
      display: flex;
      justify-content: center;
      padding-left: 0;

      li {
        font-size: 2rem;
        margin: 1.5rem;
        list-style: none;
        a {
          color: ${({ theme }) => theme.color__text};
        }
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoint_T}) {
    width: 90%;
    margin: 0 auto;

    .about__content {
      margin: 2rem 0;
      .gatsby-image-wrapper {
        width: 260px;
        height: 260px;
      }
      p {
        width: 86%;
      }
    }
    .about__contact {
      text-align: center;
      margin: 3rem 0 0;
      h1 {
        font-size: 1.8rem;
      }
    }
  }
`;
