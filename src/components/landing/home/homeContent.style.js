import styled from "styled-components";

export const HeaderContainer = styled.section`
  width: 64%;
  margin: 1rem auto;
  // justify-content: center;
  align-items: center;
  display: flex;
  height: 37vh;
  h1 {

    font-size: 5rem;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.color__text};
    display: inline-block;
  
  }
  h2 {
    font-size: 1rem;
    letter-spacing: 0.1rem;
    margin-bottom: 1rem;
    display: inline-block;
  }
  span {
    width: 60%;
    display: block;
    font-size: 1.4rem;
    font-weight: 400;
    font-style: normal;
    line-height: 1.75em;
    color: ${({ theme }) => theme.color__gray};
    margin: 0.89rem 0;
  }
  .svg {
    height: 70rem;
    overflow: hidden;
    position: absolute;
    top: -160px;
    left: 0;
    width: 100%;
    z-index: -69;
    transform: rotate(180deg);
 
      display: block;
      path {
        fill: ${({ theme }) => theme.color__svg};
      }
    }
  }





  /* Laptop Version  */
 @media  (max-width:  ${({ theme }) =>
   theme.breakpoint_L}) and  (min-width: ${({ theme }) => theme.breakpoint_T}) {
     height: 44vh;
     width:100%;
     margin-top:0;
     background:red;
     clip-path: polygon(0 0,100% 0%,100% 86%,0 100%);
     .svg{
         display:none;
      }
     background:${({ theme }) => theme.color__svg};
    .contant-wrapper{
      width:72%;
      margin:0 auto;
     }
      .content{
        h1{
          letter-spacing: 4.2px;
        }
        span{
          width:100%;
        }
      }
     }


/* Laptop Version  */
     @media  (max-width:  ${({ theme }) =>
       theme.breakpoint_T}) and  (min-width: ${({ theme }) =>
  theme.breakpoint_M}) {
       height: 42vh;
     width:100%;
     margin-top:0;
     background:${({ theme }) => theme.color__svg};
     clip-path: polygon(0 0,100% 0%,100% 86%,0 100%);
     .svg{
         display:none;
      }
      .content{
        width: 75%;
    margin: 0 auto 0 6rem;
    h1{
        letter-spacing: 4px;
        font-size:3.6rem;
        white-space: nowrap;
      }
      a{
        width: 151px;
      }
      span{
        width:unset;
        line-height: 2rem;
        font-size:1.4rem;
      }
   
      }
     
   }

   @media  (max-width:  ${({ theme }) => theme.breakpoint_M}) {
    height:60vh;
    width:100%;
    .svg{
      display:none;
    }
     .content{
        margin: 2rem 0;
            text-align: center;
            align-items:center;
    width: 94%;
     padding: 0 0 0 1.5rem;
    h1{
      font-size: 3.1rem;
     }
    }a{
      width: 140px;
    height: 40px;
    border-radius: 9px;
    }
    span{
      width:100%;
    }
       
    }

`;

export const ButtonWrapper = styled.div`
  display: inline-flex;
  justify-content: flex-start;
`;
