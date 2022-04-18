import styled from "styled-components";

export const CategoryContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 50px 20px;
`;
export const CategoryTitle = styled.h2`
	font-size: 37px;
	margin-bottom: 25px;
	text-align: center;

	&:hover {
		color: white;
		background-color: black;
		border-radius:20px;
		transition: all 0.5s ease-in-out;
	}
`;
