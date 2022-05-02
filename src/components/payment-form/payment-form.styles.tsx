import styled from "styled-components";
import Button from "../button/button.component";

export const PaymentFormContainer = styled.div`
	height: 300px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const FormContainer = styled.form`
	height: 100px;
	min-width: 500px;

	@media screen and (max-width: 600px) {
		min-width: unset;
		display: flex;
		flex-wrap: nowrap ;
		justify-content: flex-start;
	}
`;

export const PaymentButton = styled(Button)`
	margin-left: auto;
	margin-top: 30px;
`;
