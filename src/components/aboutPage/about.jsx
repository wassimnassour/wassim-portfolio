import React from "react";
import Image from "gatsby-image";
import { contactIcons } from "../../constants/contactIcons";
import { useStaticQuery, graphql, Link } from "gatsby";
import { AboutPageContainer, AboutPageWrapper } from "./about.style";
const AboutPage = () => {
  const IamgeLaptop = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "wassim.jpg" }) {
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
            Hi ,my name is wassim nassour{" "}
            <span className="important__word">
              self-taught JavaScript developer
            </span>{" "}
            , I’ve been passionate about technology since I was a kid. i'm
            someone friendly and ambition to learn and grow and gain more
            experience. I write clean and readable also high-quality code using
            current best practices in web development , by using many
            technologies such us JavaScript , React , Redux , Gatsby ..... , In
            my downtime, I enjoy reading about tech, or watching some tutorials
            in addition i 'm start blogging in my <Link to="/blog/1">Blog</Link>{" "}
            .
            <br /> So I'm locking for opportunity to develop my skills , team
            oriented and a happy workplace. To know more about me, please visit
            my{" "}
            <a href="http://linkedin.com/in/wassim-nassour-a21b53138">
              LinkedIn
            </a>{" "}
            or you can call me at this number
            <span className="important__word">+212641327128</span> , i'm free
            you can call me anytime you want. Looking forward to your response
            and feedback i will be happy to hear from you . You can know more
            about me and tech i use by reading my{" "}
            <a
              className="important__word"
              href="https://drive.google.com/file/d/1QVqHaoN7WfTmhHZs5iffJOSv4rZwYKcF/view?usp=sharing"
            >
              Resume
            </a>
            .
            <br /> Thank you .
          </p>
        </div>
        <div className="about__contact">
          <h2> You can find me here i will be very happy to speak to you </h2>

          <ul>{contactIcons}</ul>
        </div>
      </AboutPageWrapper>
    </AboutPageContainer>
  );
};

export default AboutPage;
