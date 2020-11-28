import styled from "styled-components";

export const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 0 0.1rem;
	height: 110px;
	width: 30%;
	text-align: center;
	margin: 1rem;
	border-right: 1px solid #3a3a3a3d;
	&:nth-last-child(1) {
		border-right: none;
	}
	h2 {
		font-size: 1.6rem;
		margin-top: 2rem;
	}
	p {
		display: none;
	}

	svg {
		width: 4rem;
	}

	//media queries form Tablete
	@media (max-width: ${({ theme }) => theme.breakpoint_T}) {
		flex-basis: 40%;
		margin: 2rem;
		height: 240px;
		border-right: none;
		box-shadow: rgba(33, 33, 33, 0.14) 0px 0px 4px 0px;
		background: #1d1d1d;
		border-radius: 8px;
		padding: 1rem;
		p {
			display: block;
			color: ${({ theme }) => theme.color__gray};
			font-size: 1.4rem;
			margin: 0;
			height: 30%;
			padding: 0 0.7rem;
		}
	}

	//media queries form Mobile
	@media (max-width: ${({ theme }) => theme.breakpoint_M}) {
		flex-basis: 80%;
		margin: 1rem;

		&:nth-last-child(1) {
			border-bottom: none;
		}
	}
`;
