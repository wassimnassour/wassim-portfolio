import React from "react";
import { CustomButton } from "../../index";
import {
  HeaderContainer,
  ButtonWrapper,
  ResumeButton,
} from "./homeContent.style";

const HomeContent = () => {
  return (
    <HeaderContainer>
      <div className="contant-wrapper">
        <div className="content">
          <h1>Wassim Nassour</h1>

          <span>
            Hi my name is wassim
            <br />
            am self-taught front-end developer also have basic Knowledge in
            Back-end , and i love solving problems
          </span>
          <ButtonWrapper>
            <ResumeButton href="https://drive.google.com/file/d/1QVqHaoN7WfTmhHZs5iffJOSv4rZwYKcF/view?usp=sharing">
              Resume
            </ResumeButton>
            <CustomButton
              content={"Contact me"}
              url={"contact"}
              color="black"
            />
          </ButtonWrapper>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default HomeContent;
