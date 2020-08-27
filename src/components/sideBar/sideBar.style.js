import styled from "styled-components";

export const SideBarContainer = styled.div`
	@media (min-width: ${({ theme }) => theme.breakpoint_T}) {
		display: none;
	}
	ul {
		margin: 7rem 0;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		a {
			font-size: 3rem;
			transition: 0.3s all;
		}
		li {
			padding: 1rem;
			color: ${({ theme }) => theme.color__text};
		}
		button {
			margin: 2rem;
		}
	}

	.sideBar__Wrapper {
		height: 100vh;
		position: absolute;
		right: 0;
		top: 0;
		width: 100%;
		background: rgba(0, 0, 0, 0.7);
	}
	.SideBar {
		background: ${({ theme }) => theme.color__background};
		width: 42%;
		right: 0;
		position: absolute;
		top: 0;
		bottom: 0;
	}
	@media (max-width: ${({ theme }) => theme.breakpoint_M}) {
		.SideBar {
			background: ${({ theme }) => theme.color__background};
			width: 75%;
		}
	}
`;

export const Button = styled.div`
	z-index: 66;
	margin-right: 2rem;
	border: none;
	font-size: 2rem;
	position: absolute;
	top: 2rem;
	right: 1rem;

	.svg {
		font-size: 2.8rem;
		margin-top: 0.7rem;
		color: ${({ theme }) => theme.color__text};
	}

	${({ open }) =>
		open && {
			transition: " .3s all",
			transform: "rotateZ(360deg)",
			right: "33%",
		}};
	@media (max-width: ${({ theme }) => theme.breakpoint_M}) {
		right: 0;
		margin-right: 1rem;
		top: 1.2rem;
		${({ open }) =>
			open && {
				right: "60%",
			}};
	}
`;
