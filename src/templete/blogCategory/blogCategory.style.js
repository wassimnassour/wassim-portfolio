import styled from "styled-components";

export const CategoryTitle = styled.h1`
	color: ${({ theme }) => theme.color__text};
	font-size: 3rem;
	text-align: center;
	margin-top: 2rem;
	margin-bottom: 0;
	text-align: left;
	width: 100%;
	/* Tablet Version */
	@media (max-width: ${({ theme }) => theme.breakpoint_T}) {
		font-size: 2.5rem;
	}
	/* Mobile Version */
	@media (max-width: ${({ theme }) => theme.breakpoint_M}) {
		font-size: 2.2rem;
	}
`;
