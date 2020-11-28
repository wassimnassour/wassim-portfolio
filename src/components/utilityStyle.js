import styled from "styled-components";

export const Title = styled.h1`
	font-size: 3rem;
	border-bottom: 1.6px solid ${({ theme }) => theme.color__primary};
	display: inline-block;
`;

export const BigTitle = styled.h1`
	font-size: 3.6rem;
	background: ${({ theme }) => theme.color__svg};
	padding: 2rem;
	color: ${({ theme }) => theme.color__text};
	text-align: center;
	width: 88%;
	margin-right: auto;
	margin-left: auto;
`;
