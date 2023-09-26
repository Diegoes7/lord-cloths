import styled from 'styled-components'

export const Overlay = styled.div`
	display: block;
	position: fixed;
	z-index: 1;
	background-color: rgba(27, 27, 36, 0.9);
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
// export const ModalStyles = styled.div`
/* display: flex;
	justify-content: center;
	height: 100vh;
	width: 45rem;
	align-items: center; */
/* position: absolute;
	left: 75%;
	top: 125%;
	transform: translate(-50%, -50%); */
// `

export const ModalView = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: start;
	width: 50%;
	/* height: 12rem; */
	border: 2px solid black;
	border-radius: 15px;
	padding: 10px;
	background-color: lightgrey;
	overflow: hidden;

	h2 {
		font-size: 16px;
		width: 97%;
		word-wrap: break-word;
		overflow-wrap: break-word;
		hyphens: auto;
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
		background-color: #2bc85a;
	}
`
