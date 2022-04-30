import styled from "styled-components";
import Button from "../button/button.component";

export const PaymentFormContainer = styled.div`
	height: 300px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

// export const CardStyles = styled.div`
// 	width: 4rem;
// 	height: 4rem;
// 	color: "#c4f0ff";
// 	background-color: "#fff";
// 	font-weight: "500";
// 	font-family: "Roboto, Open Sans, Segoe UI, sans-serif";
// 	font-size: "16px";
// 	font-smooth: "antialiased";
// `;

export const FormContainer = styled.form`
	height: 200px;
	min-width: 500px;
`;

export const PaymentButton = styled(Button)`
	margin-left: auto;
	margin-top: 30px;
`;
