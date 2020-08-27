import styled from "styled-components";
export const BlogContainer = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 2rem 0;
	padding: 1rem;

	height: auto;
`;
export const BlogWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	margin: 3.6rem auto;
	//media queries form Tablete
	@media (max-width: ${({ theme }) => theme.breakpoint_T}) {
		flex-wrap: wrap;
		justify-content: center;
	}
`;
export const Article = styled.article`
	background: ${({ theme }) => theme.color__svg};

	width: 31.5%;
	text-align: center;
	font-size: 1.6rem;
	font-weight: 600;
	box-shadow: 0 0 2px grey;
	overflow: hidden;
	h1 {
		font-size: 1.7rem;
		font-weight: 600;
		text-align: center;
		margin: 0;
		padding: 0.3rem;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 30%;
	}
	.gatsby-image-wrapper {
		height: 68%;
	}
	&:hover {
		.gatsby-image-wrapper {
			transform: scale(1.03);
			transition: 0.2s all ease-in-out;
			box-shadow: 0 0 4px 0px #555;
		}
	}
	//media queries form Tablete
	@media (max-width: ${({ theme }) => theme.breakpoint_T}) {
		height: 262px;
		// display: flex;
		margin: 1rem;
		flex-basis: 30%;
		a {
			height: 100%;
			width: 100%;
		}
		h1 {
			font-size: 1.5rem;
			height: 30%;
		}
		.gatsby-image-wrapper {
			height: 67%;
			min-width: 60%;
		}
	}
	@media (max-width: ${({ theme }) => theme.breakpoint_M}) {
		height: 262px;
		// display: flex;
		margin: 1rem;
		flex-basis: 80%;
		a {
			height: 100%;
			width: 100%;
		}
		h1 {
			font-size: 1.5rem;
			height: 30%;
		}
	}
`;
