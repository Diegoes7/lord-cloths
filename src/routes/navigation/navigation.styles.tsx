import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

const hovr = css`
	transform: scale(1.2);
	transition: ease-in-out 0.7s;
`

export const NavigationContainer = styled.div`
	height: 70px;
	width: 100%;
	display: flex;
	justify-content: space-around;
	margin-bottom: 25px;
	border-bottom: 2px solid black;
	background-color: #d4dae1;
	border-radius: 0.75rem;

	@media screen and (max-width: 800px) {
		height: 60px;
		padding: 5px;
		margin-bottom: 20px;
	}
`

export const LogoContainer = styled(Link)`
	height: 100%;
	width: 70px;
	padding: 0.8rem;

	&:hover {
		${hovr}
	}
	@media screen and (max-width: 800px) {
		width: 50px;
		padding: 0;
	}
`

export const NavLinks = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	@media screen and (max-width: 800px) {
		width: 80%;
	}
`

export const NavLink = styled(Link)`
	padding: 10px 15px;
	cursor: pointer;

	&:hover {
		/* ${hovr} */
		background-color: black;
		color: white;
		border-radius: 10px;
		transform: scale(1.1);
		transition: ease-in-out 0.7s;
	}

	&:active {
		background-color: blue;
	}
`
