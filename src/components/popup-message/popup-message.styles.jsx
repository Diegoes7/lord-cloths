import styled from "styled-components";

export const ModalStyles = styled.div`
	display: flex;
	justify-content: center;
	min-height: 25vh;
	align-items: center;
`;

export const ModalView = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;
	height: 20vh;
	border: 2px solid black;
	border-radius: 15px;
	padding: 10px;
	background-color: lightgrey;

	h2 {
		font-size: 16px;
	}
`;

export const PopupButtonStyles = styled.button`
	display: flex;
	align-self: center;
    justify-content: center ;
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
`;
