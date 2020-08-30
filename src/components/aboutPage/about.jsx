import React from "react";
import Image from "gatsby-image";
import { contactInfo } from "../../constants/contactIcons";
import { useStaticQuery, graphql, Link } from "gatsby";
import { AboutPageContainer, AboutPageWrapper } from "./about.style";
const AboutPage = () => {
  const IamgeLaptop = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "laptop.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <AboutPageContainer>
      <AboutPageWrapper>
        <div className="about__content">
          <div className="image-wrapper">
            <Image
              fluid={IamgeLaptop.file.childImageSharp.fluid}
              alt="author-image"
              objectFit="cover"
            />
          </div>
          <p>
            {" "}
            Hi my name is <span className="important__word">Wassim </span>,am 21
            years old from morocco live in Casablanca , and i’m{" "}
            <span className="important__word">
              self-taught front-end developer
            </span>{" "}
            and code lover and someone ambition to learn new stuff and the
            amazing things i learn all the technologies by my self i spent a lot
            of time learning and making stuff .
            <br /> You can know more about me and tech i use by reading my
            aricles
            <Link className="important__word" to="/blog">
              see more
            </Link>
          </p>
        </div>
        <div className="about__contact">
          <h2> You can find me here i will be very happy to speak to you </h2>

          <ul>{contactInfo}</ul>
        </div>
      </AboutPageWrapper>
    </AboutPageContainer>
  );
};

export default AboutPage;
