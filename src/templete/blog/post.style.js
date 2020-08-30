import styled from "styled-components";

export const PostWrapper = styled.article`

	margin: 7rem auto;
	width: 70%;
	.title {
		text-align: center;
		font-size: 3.2rem;
		font-weight: 700;
		margin-bottom: 4rem;
	}
	.gatsby-image-wrapper {
		max-height: 600px;
	}
	
	.buttons {
		display: flex;
		justify-content: space-between;
		margin: 6rem 0;
		align-items:center;
		 .right{
    justify-content: flex-end;
    }
    .left{
    justify-content: flex-start;
    }
		a {
			color: ${({ theme }) => theme.color__text};
    flex-basis: 44%;
    padding: .3rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
   
		
			svg{
				   font-size: 1.6rem;
				       margin: 0 1.3rem;
			}
			.left-icon {
    
    
    transform: rotateY(-180deg);

}
			}
			.line {
			font-size: 2rem;
			}
		}
	}
	 @media  (max-width: ${({ theme }) => theme.breakpoint_L}) {
	 	width:80%;
	 }
	  @media  (max-width: ${({ theme }) => theme.breakpoint_M}) {
	 	width:86%;
	 	.title{
	 		    font-size: 2.8rem;
	 		    margin-bottom:2.5rem;
	 	}
	 }
`;

export const H1 = styled.h1`
	font-size: 3rem;
	margin-bottom: 0px;
	margin-top: 2rem;
`;
export const H2 = styled.h2`
	font-size: 2.3rem;
	margin-top: 2rem;
	margin-bottom: 0;
`;
export const H3 = styled.h3`
	font-size: 2rem;
	margin-top: 2rem;
	margin-bottom: 0;
`;
export const H4 = styled.h4`
	margin-top: 2rem;
	font-size: 1.8rem;
	margin-bottom: 0;
`;
export const P = styled.p`
	font-size: 1.6rem;
	letter-spacing: 0.3px;
	line-height: 2.7rem;
`;
export const Li = styled.li`
	padding-left: 0;
	list-style: disc;
`;
export const Code = styled.p`
	background: red;
`;
