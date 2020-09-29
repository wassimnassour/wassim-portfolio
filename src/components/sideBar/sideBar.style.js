import styled from "styled-components";

export const SideBarContainer = styled.div`
	@media (min-width: ${({ theme }) => theme.breakpoint_T}) {
		display: none;
	}
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
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

export const Button = styled.button`
	z-index: 66;
	margin-right: 2rem;
	border: none;
	position: absolute;
	right: 0;
	background: none;
	font-size: 4.2rem;
	outline: none;
	.svg {
		font-size: 2.8rem;
		color: ${({ theme }) => theme.color__text};
	}

	${({ open }) =>
		open && {
			transition: " .3s all",
			transform: "rotateZ(360deg)",
			right: "33%",
			top: "2rem",
		}};
	@media (max-width: ${({ theme }) => theme.breakpoint_M}) {
		right: 0;
		margin-right: 1rem;
		${({ open }) =>
			open && {
				right: "60%",
			}};
	}
`;
