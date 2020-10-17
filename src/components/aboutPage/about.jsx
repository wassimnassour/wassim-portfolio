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
              alt="author-image"
              objectFit="cover"
            />
          </div>
          <p>
            {" "}
            Hi, my name is <span className="important__word">Wassim</span>, am
            21 years old from morocco live in Casablanca, and I’m
            <span className="important__word">
              a self-taught front-end developer
            </span>{" "}
            , I'm passionate about Tech and someone ambition to learn new stuff
            and the amazing things , i learn all the technologies by my self i
            spent a lot of time learning and making stuff. also skilled at
            writing well-designed tastable, and efficient code using current
            best practices in web development also proficient in translating
            designs into high-quality code, and write applications using React
            and javascript and Gatsby,
            <br />
            You can know more about me and tech i use by reading my{" "}
            <a
              className="important__word"
              href="https://drive.google.com/file/d/1QVqHaoN7WfTmhHZs5iffJOSv4rZwYKcF/view?usp=sharing"
            >
              Resume
            </a>
            .
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
