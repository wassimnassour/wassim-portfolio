import React from "react";
import { CustomButton, SocialMediaIcons } from "../../index";
import { useFixed } from "../../../hook/useFixed";
import {
  HeroContainer,
  ButtonWrapper,
  ResumeButton,
  ContentWrapper,
  ContactList,
} from "./homeContent.style";
const HomeContent = () => {
  const { fixed } = useFixed();
  return (
    <HeroContainer fixed={fixed}>
      <ContentWrapper>
        <span className="job-title">Front-End Developer</span>
        <h1>Wassim Nassour</h1>
        <span>
          I'm a Self-taught JavaScript Developer, proficient in Front-End, I'm
          passionate about the Tech world, skilled at writing clean and readable
          Code, by using current best practices in web development
        </span>
        <ButtonWrapper>
          <ResumeButton href="https://drive.google.com/file/d/1QVqHaoN7WfTmhHZs5iffJOSv4rZwYKcF/view?usp=sharing">
            Resume
          </ResumeButton>
          <CustomButton content={"Contact me"} url={"contact"} color="black" />
        </ButtonWrapper>
      </ContentWrapper>
      <ContactList fixed={fixed}>
        <SocialMediaIcons />
        <span>Nassourwassim@gmail.com</span>
      </ContactList>
    </HeroContainer>
  );
};

export default HomeContent;
