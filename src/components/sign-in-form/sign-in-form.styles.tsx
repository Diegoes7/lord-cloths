import styled from "styled-components";

export const SignInContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 45%;

	@media screen and (max-width: 800px) {
		margin-bottom: 2rem;
		width:70%;
	}
`;
export const SignInHeading = styled.h2`
	margin: 10px 0;
`;

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;
