import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { CustomButton } from "../../index";
import {
  HeaderContainer,
  ButtonWrapper,
  ResumeButton,
} from "./homeContent.style";

const HomeContent = () => {
  const data = useStaticQuery(graphql`
    {
      file(extension: { eq: "pdf" }) {
        publicURL
      }
    }
  `);
  return (
    <HeaderContainer>
      <div className="svg">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{ height: "100%", width: "100%" }}
        >
          <path
            d="M0.00,49.98 C231.09,125.81 149.26,-43.91 500.00,49.98 L513.26,152.45 L0.00,150.00 Z"
            style={{
              stroke: "none",
            }}
          ></path>
        </svg>
      </div>
      <div className="contant-wrapper">
        <div className="content">
          <h1>Wassim Nassour</h1>

          <span>
            Hi my name is wassim ,<br />
            am self-taught front-end developer also have basic knowldeg in
            Back-end , and i love solving problems
          </span>
          <ButtonWrapper>
            <ResumeButton href={data.file.publicURL} download>
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
