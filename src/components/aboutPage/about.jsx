import React from "react";
import Image from "gatsby-image";
import { contactInfo } from "../../constants/contactIcons";
import { useStaticQuery, graphql } from "gatsby";
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
              alt=""
              objectFit="cover"
            />
          </div>
          <p>
            {" "}
            Hi my name is <span className="important__word">Wassim </span>,am 21
            years old from morocco live in casablanca , and i’m{" "}
            <span className="important__word">
              self-taught front-end developer
            </span>{" "}
            and code lover and somoon ambation to learn new stuff and amzing
            thing i learn all the technologies by my self i spent a lot of time
            learning and and making stuffs
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
