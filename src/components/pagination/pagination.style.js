import styled from "styled-components";

export const PagintionList = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	justify-content: center;
	ul {
		display: flex;
		align-items: center;
	}
	li {
		a {
			color: ${({ theme }) => theme.color__primary};
			margin: 1rem;
			font-size: 2.7rem;
			font-weight: bold;
		}
		span {
			color: ${({ theme }) => theme.color__gray};
			margin: 1rem;
			font-size: 2.7rem;
			font-weight: bold;
		}
	}
`;
