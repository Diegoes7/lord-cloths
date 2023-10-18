import styled from 'styled-components'

export const Overlay = styled.div`
	display: block;
	position: fixed;
	z-index: 1;
	background-color: rgba(0, 0, 0, 0.9);
	left: 0;
	top: 0;
	overflow: auto;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
`

export const ModalView = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 50%;
	border: 2px solid black;
	border-radius: 15px;
	padding: 10px;
	background-color: #f2e9e9;
	overflow: hidden;

	h2 {
		font-size: 16px;
		width: 97%;
		word-wrap: break-word;
		overflow-wrap: break-word;
		hyphens: auto;
		color: #158c82;
		text-decoration: underline;
	}
`

export const PopupButtonStyles = styled.button`
	display: flex;
	align-self: center;
	justify-content: center;
	margin: 7px;
	padding: 7px;
	border: 2px solid black;
	width: 5rem;
	height: 32px;
	font-weight: bold;
	border-radius: 15px;

	&:hover {
		transform: scale(1.2);
		color: #ffffff;
		background-color: #ff30e0;
	}
`
