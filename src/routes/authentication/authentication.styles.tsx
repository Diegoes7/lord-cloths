import styled from "styled-components";

export const AuthenticationContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-around;
	align-items: center;
	gap: 2rem;

	@media screen and (max-width: 800px) {
		flex-direction: column;
		align-items: center;
		margin: 10px;
	}
`;
