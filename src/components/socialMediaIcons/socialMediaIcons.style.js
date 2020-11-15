import styled from "styled-components";

export const IconsCotainer = styled.div`
	a {
		margin: 1rem 2rem;
	}
	svg {
		font-size: 3rem;
	}

	@media (max-width: ${({ theme }) => theme.breakpoint_T}) {
		a {
			margin: 1.5rem;
		}
		svg {
			font-size: 2.5rem;
		}
	}
`;
