import styled from "styled-components";
import { Link } from "react-router-dom";

export const CategoryPreviewContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 30px;
`;

export const Title = styled(Link)`
	font-size: 28px;
	margin-bottom: 25px;
	cursor: pointer;

	&:hover {
		padding: 15px 20px;
		color: white;
		background-color: black;
		border-radius: 20px;
		transition: all 0.5s ease-in-out;
	}
`;

export const Preview = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	column-gap: 20px;
`;
