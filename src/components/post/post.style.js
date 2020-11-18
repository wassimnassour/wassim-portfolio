import styled from "styled-components";

export const PostWrapper = styled.article`
	max-height: auto;
	${({ location }) =>
		location === "homePage"
			? {
					fontSize: "1rem",
					width: "31%",
			  }
			: {
					fontSize: "3rem",
					width: "100%",
			  }}

	margin: 4rem 0;
	color: ${({ theme }) => theme.color__white};
	border-radius: 0.8rem;
	overflow: hidden;
	background: ${({ theme }) => theme.color__article};
	box-shadow: rgba(33, 33, 33, 0.14) 0px 0px 10px 0px;
	&:hover {
		box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 20px 0px;
		transition: all 0.7s ease 0s;
	}

	.box-text {
		height: ${({ location }) => (location === "homePage" ? "50%" : "27%")};
		overflow: hidden;
		padding: 1.3rem 1.3rem 0;
		width: 100%;
		p {
			font-size: ${({ location }) =>
				location === "homePage" ? "1.4rem" : "1.5rem"};
			color: ${({ theme }) => theme.color__gray};
		}
		h1 {
			font-size: ${({ location }) =>
				location === "homePage" ? "1.9rem" : "2.35rem"};
			margin: 0.6rem 0;
			color: ${({ theme }) => theme.color__text};
		}
	}
	//small laptop

	@media (max-width: ${({ theme }) => theme.breakpoint_L}) {
		.box-text {
			height: 56%;
		}
	}
	/*tablete Version */
	@media (max-width: ${({ theme }) => theme.breakpoint_T}) {
		${({ location }) =>
			location === "homePage" && {
				width: "44%",
				maxHeight: "602px",
			}}
		margin:1.3rem;
		.box-text {
			display: flex;
			flex-direction: column;
			height: 46%;
			h1 {
				margin: 0.1rem 0;
				font-size: 2.4rem;
			}
			p {
				font-size: 1.5rem;
				color: ${({ theme }) => theme.color__gray};
				margin: 0.4rem 0;
			}
		}
	}

	/*mobile Version */
	@media (max-width: ${({ theme }) => theme.breakpoint_M}) {
		margin: 2.9rem 0;
		max-height: 500px;

		${({ location }) =>
			location === "homePage" && {
				width: "85%",
			}}

		.box-text {
			height: 55%;
			h1 {
				font-size: 1.9rem;
			}
			p {
				font-size: 1.4rem;
				color: ${({ theme }) => theme.color__gray};
				margin: 0.4rem 0;
			}
		}
	}
`;

export const Categories = styled.ul`
	display: flex;
	justify-content: flex-start;
	width: 100%;
	margin-top: 2rem;
	margin-left: 1.2rem;
	margin-bottom: 0;
`;

export const Category = styled.li`
	margin-right: 1rem;
	
	.category_link {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: ${({ location }) => (location === "homePage" ? "1.3rem" : "1.5rem")};
		font-weight: 600;
		min-width: 67px;
		padding: 0.4rem 1rem;
		border-radius: 1.7rem;
		background: ${({ category }) =>
			category === "dev"
				? "#ff414d"
				: category === "life"
				? "#16a596"
				: category === "Events"
				? "#721b65"
				: ""};
	}
	
 /* Mobile Version */
	@media (max-width: ${({ theme }) => theme.breakpoint_M}) {
		.category_link {
			font-size: 1.3rem;
			font-weight: 600;
			padding: 0.4rem 0.5rem;
			border-radius: 1.6rem;
	}
`;

export const ImageWrapper = styled.div`
	height: ${({ location }) => (location === "homePage" ? "50%" : "63%")};
	width: 100%;
	.gatsby-image-wrapper {
		height: 100%;
		width: 100%;
		border-radius: 6px;
	}
	/*tablete Version */
	@media (max-width: ${({ theme }) => theme.breakpoint_T}) {
		height: ${({ location }) => (location === "homePage" ? "45%" : "60%")};
	}
	/*Mobile Version */
	@media (max-width: ${({ theme }) => theme.breakpoint_M}) {
		height: ${({ location }) => (location === "homePage" ? "50%" : "53%")};
	}
`;
