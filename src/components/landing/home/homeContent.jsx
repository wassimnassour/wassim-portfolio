import React from "react";
import { Link } from "gatsby";
import { TiArrowRightThick } from "react-icons/ti";
import Fade from "react-reveal/Fade";
import { SocialMediaIcons } from "../../index";
import { useFixed } from "../../../hook/useFixed";
import {
  HeroContainer,
  ButtonWrapper,
  ContentWrapper,
  ContactList,
} from "./homeContent.style";
const HomeContent = () => {
  const { fixed } = useFixed();
  return (
    <HeroContainer fixed={fixed}>
      <ContentWrapper>
        <Fade left distance="80px">
          <span className="job-title">Front-End Developer</span>
          <h1>Wassim Nassour</h1>
          <span>
            I'm a Self-taught JavaScript Developer, proficient in Front-End, I'm
            passionate about the Tech world, skilled at writing clean and
            readable Code, by using current best practices in web development
          </span>
          <ButtonWrapper>
            <Link to="/contact" className="link_chat">
              Let's Have Talk
              <span className="right">
                <TiArrowRightThick />
              </span>
            </Link>
          </ButtonWrapper>
        </Fade>
      </ContentWrapper>
      <ContactList fixed={fixed}>
        <SocialMediaIcons />
        <span>Nassourwassim@gmail.com</span>
      </ContactList>
    </HeroContainer>
  );
};

export default HomeContent;
