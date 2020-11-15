import styled from "styled-components";

export const Project = styled.div`
	display: flex;
	flex-direction: column;
justify-content: space-between;
	padding: 0 0.1rem;
	height: auto;
	width: 47%;
	margin: 1rem 0.5rem;
	box-shadow: 0px 0 2px #6c757d7d;
	padding: 1.5rem;
	position: relative;
	.language {
		font-size: 1.5rem;
		font-weight: bold;
		letter-spacing: 1px;
		${({ primaryLanguage }) => (primaryLanguage === "JavaScript" ? { color: "yellow" } : "")}
	}
	.project {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	h1 {
		font-size: 2rem;
		display: flex;
	}

	span {
		font-size: 2.5rem;
	}
	p {
		font-size: 1rem;
	}

	@media (max-width: ${({ theme }) => theme.breakpoint_T}) {

		flex-basis: 43%;
	}
	//media queries form Mobile
	@media (max-width: ${({ theme }) => theme.breakpoint_M}) {
		flex-basis: 80%;
	}
`;

export const LinksWrapper = styled.div`
	display: flex;
	a {
		margin: 1rem;
		font-size: 3rem;
        cursor: pointer;
	}


`;

export const ProjectDetails = styled.div`
	span{
		margin:0 .8rem;
	}
`;
