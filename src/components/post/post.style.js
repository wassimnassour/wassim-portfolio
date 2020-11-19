import styled from "styled-components";

export const PostWrapper = styled.article`
	${({ location }) =>
		location === "homePage"
			? {
					fontSize: "1rem",
					width: "31%",
			  }
			: {
					fontSize: "3rem",
					width: "100%",
					height: "30rem",
					display: "flex",
					flexDirection: "row-reverse",
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
		height: ${({ location }) => (location === "homePage" ? "50%" : "100%")};
		padding: 0.8rem 1.3rem 0;
		width: 60%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		${({ location }) =>
			location === "homePage" && {
				width: "100%",
				height: "auto",
			}}
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
		span {
			color: ${({ theme }) => theme.color__gray};
			font-size: 1.2rem;
		}
	}
	/*tablete Version */
	@media (max-width: ${({ theme }) => theme.breakpoint_T}) {
		${({ location }) =>
			location === "homePage"
				? {
						width: "44%",
						height: "56rem",
				  }
				: { height: "32rem" }}
		margin:1.3rem;
		.box-text {
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			${({ location }) =>
				location === "homePage" && {
					width: "100%",
					height: "auto",
				}}
			h1 {
				margin: 1rem 0;
				font-size: 2.4rem;
			}
			p {
				font-size: 1.5rem;
				margin: 0.9rem 0;
			}
		}
	}

	/*mobile Version */
	@media (max-width: ${({ theme }) => theme.breakpoint_M}) {
		margin: 2.9rem 0;
		height: 47rem;
		display: unset;
		${({ location }) =>
			location === "homePage" && {
				width: "90%",
			}}
		.box-text {
			padding-top: 0;
			width: 100%;
			height: auto;
			a {
				height: 93%;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
			}
			h1 {
				font-size: 1.9rem;
				margin: 0.5rem 0;
			}
			p {
				font-size: 1.4rem;
				margin: 0.4rem 0;
			}
			span {
				margin: 0.2rem 0;
			}
		}
	}

	/*small mobile Version */
	@media (max-width: ${({ theme }) => theme.breakpoint_Mobile_xs}) {
		height: 52rem;
	}
`;

export const Categories = styled.ul`
	display: flex;
	justify-content: flex-start;
	width: 100%;
	margin: 0.5rem 0;

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
		min-width: 60px;
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
			border-radius: 1.6rem;
	}
`;

export const ImageWrapper = styled.div`
	height: ${({ location }) => (location === "homePage" ? "50%" : "100%")};

	width: ${({ location }) => (location === "homePage" ? "100%" : "50%")};
	.gatsby-image-wrapper {
		height: 100%;
		width: 100%;
		border-radius: 6px;
	}
	/*  small laptop */
	@media (min-width: ${({ theme }) => theme.breakpoint_T}) and (max-width: ${({
			theme,
		}) => theme.breakpoint_L}) {
		height: ${({ location }) => (location === "homePage" ? "42%" : "100%")};
	}

	/*tablete Version */

	@media (max-width: ${({ theme }) => theme.breakpoint_T}) {
		height: ${({ location }) => (location === "homePage" ? "45%" : "100%")};
		width: ${({ location }) => location === "homePage" && "100%"};
	}
	/*Mobile Version */
	@media (max-width: ${({ theme }) => theme.breakpoint_M}) {
		width: 100%;
		height: ${({ location }) => (location === "homePage" ? "50%" : "50%")};
	}
	/*small mobile Version */
	@media (max-width: ${({ theme }) => theme.breakpoint_Mobile_xs}) {
		height: ${({ location }) => (location === "homePage" ? "45%" : "45%")};
	}
`;
