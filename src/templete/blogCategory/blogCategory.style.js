import styled from "styled-components";

export const CategoryTitle = styled.h1`
	color: ${({ theme }) => theme.color__text};
	text-align: left;
	font-size: 4.5rem;
	margin-top: 2rem;
	margin-bottom: 0;
	text-align: left;
	max-width: 1400px;
	/* Tablet Version */
	@media (max-width: ${({ theme }) => theme.breakpoint_T}) {
		font-size: 2.5rem;
	}
	/* Mobile Version */
	@media (max-width: ${({ theme }) => theme.breakpoint_M}) {
		font-size: 2.2rem;
	}
`;
