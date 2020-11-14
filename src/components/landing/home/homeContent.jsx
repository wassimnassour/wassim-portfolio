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
    <HeroContainer>
      <ContentWrapper>
        <span className="job-title">Front-End Developer</span>
        <h1>Wassim Nassour</h1>
        <span>
          I'm Self-taught front-end Developer, I'm passionate about Tech ,
          skilled at writing well-designed tastable, and efficient code using
          current best practices in web development also proficient in
          translating .
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
