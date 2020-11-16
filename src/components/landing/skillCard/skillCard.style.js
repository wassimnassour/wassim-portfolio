import styled from "styled-components";

export const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 0 0.1rem;
	height: 261px;
	width: 30%;
	text-align: center;
	margin: 1rem;
	box-shadow: 0px 0 2px #6c757d7d;

	h2 {
		font-size: 1.6rem;
		margin-top: 2rem;
		height: 15%;
	}

	p {
		color: ${({ theme }) => theme.color__gray};
		font-size: 1.4rem;
		margin: 0;
		height: 30%;
		padding: 0 0.7rem;
	}
	svg {
		width: 4rem;
		height: 20%;
	}

	//media queries form Tablete
	@media (max-width: ${({ theme }) => theme.breakpoint_T}) {
		flex-basis: 40%;

		margin: 0.8rem;
	}

	//media queries form Mobile
	@media (max-width: ${({ theme }) => theme.breakpoint_M}) {
		flex-basis: 80%;
		margin: 1rem;
	}
`;
