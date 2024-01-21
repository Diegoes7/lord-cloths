import styled, { css } from 'styled-components'
import { NavLink } from 'react-router-dom'

const hoverStyles = css`
	transform: scale(1.1);
	transition: ease-in-out 0.7s;
`

export const NavigationContainer = styled.div`
	height: 4.375rem;
	width: 100%;
	display: flex;
	justify-content: space-around;
	margin-bottom: 1rem;
	border-bottom: 2px solid black;
	background-color: #d4dae1;
	border-radius: 0.75rem;

	@media screen and (max-width: 800px) {
		height: 60px;
		padding: 5px;
		margin-bottom: 20px;
	}
`

export const LogoContainer = styled(NavLink)`
	height: 100%;
	width: 70px;
	padding: 0.8rem;

	&:hover {
		${hoverStyles}
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

export const NavLinkCustom = styled(NavLink).attrs({
	activeclassname: 'active',
})`
	&.active {
		border-bottom: 0.2rem solid black;
		padding: 0.7rem 1rem 0.3rem;
		font-weight: bold;
		transition: ease-in-out 0.4s;
	}

	padding: 10px 15px;
	cursor: pointer;
	margin-right: 0.3rem;
	border-radius: 0.75rem;

	&:hover {
		background-color: black;
		color: white;
		border-radius: 0.75rem;
		transform: scale(1.05);
		transition: ease-in-out 0.7s;
	}
`

export const WelcomeMessage = styled.div`
	display: flex;
	align-items: baseline;
	justify-content: space-between;
	padding: 0 2rem;
	margin-left: 0.5rem;
	margin-bottom: 1rem;

	@media screen and (max-width: 450px) {
		padding: 0.2rem;
	}
`
export const WelcomeMessageText = styled.span`
	display: flex;
	align-items: center;
	background-color: #83c3f0;
	padding: 0.4rem 0.8rem;
	border-radius: 0.75rem;
	height: 2.3rem;
`
export const ReloadToGetFirebaseAccountInfoStyles = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
`

export const ReloadTitle = styled.h4`
	margin-right: 2.5rem;
`
