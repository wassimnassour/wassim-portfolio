import styled from "styled-components";

export const HeaderContainer = styled.section`
  width: 72%;
  margin: 1rem auto;


  align-items: center;
  display: flex;
  height: 37vh;
  h1 {
    
    white-space: nowrap;
    margin: 0 auto; 
    letter-spacing: 0.15em; 

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
  @media (max-width: ${({ theme }) => theme.breakpoint_T}) {
  width:100%;
   height: 44vh;
  h1{
    font-size:4rem;
  }
     .content{
          display: flex;
    flex-direction: column;
    justify-content: flex-start;
        margin: 0 auto;
    width: 90%;
    align-items: flex-start;
    padding: 2rem;

    margin: 2rem auto;
    span{
      width:unset;
          font-size: 1.35rem;
    }
    h1{
      margin:0;
    }

    }
     svg{
    display:none;
  
   }
   
  
    @media (max-width: ${({ theme }) => theme.breakpoint_M}) {
      height:60vh;
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
        width: 156px;
    height: 44px;
    border-radius: 9px;
    }
       
    }

`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;
