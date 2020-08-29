import React from "react";
import { CustomButton } from "../../index";
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
            style={{
              stroke: "none",
            }}
          ></path>
        </svg>
      </div>
      <div className="contant-wrapper">
        <div className="content">
          <h1>Wassim Nassour</h1>
          {/*        // <h4>i’m self-taught , front-end developer </h4>
           */}{" "}
          <span>
            Hi my name is wassim ,<br />
            am self-taught front-end developer also have basic knowldeg in
            Back-end , and i love solving problems
          </span>
          <ButtonWrapper>
            <CustomButton
              content={"Resume"}
              url={
                "https://docs.google.com/document/d/1P_G4KWxPri4qvIWfmUrNlU99z2R0nPuOWnq04-2PqgE/"
              }
              color="blue"
            />
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

// /* //Laptop Version  */

// /*
// @media  (max-width:  ${({ theme }) => theme.breakpoint_L}) (min-width: ${({
//   theme,
// }) => theme.breakpoint_T}) {
//     height: 48vh;
//      background:red;
//        clip-path: polygon(0 0,100% 0%,100% 75%,0 93%);
//      .svg{
//         display:none;
//       }
//       background:${({ theme }) => theme.color__svg};
//      .contant-wrapper{
//      }
//       .content{
//     }
//     } */
// // Tablete responsive

// /* @media  (min-width:  ${({ theme }) =>
//     theme.breakpoint_M}) and (max-width: ${({ theme }) =>
//      theme.breakpoint_T})  {
//      width:100%;
//       background:${({ theme }) => theme.color__svg};
//        clip-path: polygon(0 0,100% 0%,100% 75%,0 93%);

//   h1{
//     font-size:4rem;
//   }
//   .contant-wrapper{
//       width: 90%;
//           padding: 2rem;

//     margin: 2rem auto;
//          margin: 0 auto;
//   }
//      .content{
//           display: flex;
//     flex-direction: column;
//     justify-content: flex-start;

//     align-items: flex-start;

//     span{
//       width:unset;
//           font-size: 1.35rem;
//     }
//     h1{
//       margin:0;
//     }

//     }
//      svg{
//     display:none;

//    }

//   //mobile Version
//     @media only screan  (min-width:200px) and (max-width:500px) {
//       height:60vh;
//       background:orangered;
//      .content{
//         margin: 2rem 0;
//             text-align: center;
//             align-items:center;
//     width: 94%;
//      padding: 0 0 0 1.5rem;
//     h1{
//       font-size: 3.1rem;

//      }

//     }a{
//         width: 156px;
//     height: 44px;
//     border-radius: 9px;
//     }
//     .svg{
//       display:none;
//     }

//     }

// `; */
