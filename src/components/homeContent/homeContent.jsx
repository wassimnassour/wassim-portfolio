import React from "react";
import { HeaderContainer, ButtonWrapper } from "./homeContent.style";

const HomeContent = () => {
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
            style={{ stroke: "none", fill: "#0274dc" }}
          ></path>
        </svg>
      </div>
      <div>
        <h1>Wassim Nassour</h1>
        {/*        // <h4>i’m self-taught , front-end developer </h4>
         */}{" "}
        <span>
          Hi my name is wassim ,am self-taught front-end developer also basic
          knowldeg in Back-end , and i love solving problems
        </span>
        <ButtonWrapper>
          {/* <Button content={"Resume"} url={"resume"} color="blue" /> */}
          {/* <Button content={"Contact me"} url={"contact"} color="blue" /> */}
        </ButtonWrapper>
      </div>
    </HeaderContainer>
  );
};

export default HomeContent;
