import styled from "styled-components";

export const ProductCartContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	height: 350px;
	align-items: center;
	position: relative;

	img {
		width: 100%;
		height: 95%;
		object-fit: cover;
		margin-bottom: 5px;
		border-radius: 15px;
	}
	button {
		width: 80%;
		opacity: 0.7;
		position: absolute;
		top: 255px;
		display: none;

		@media screen and (max-width: 800px) {
			display: block;
			padding: 0 10px;
			opacity: 0.9;
			min-width: unset;
		}
	}

	&:hover {
		img {
			opacity: 0.8;
		}
		button {
			opacity: 0.85;
			display: flex;
		}
	}

	@media screen and (max-width: 800px) {
		&:hover {
			img {
				opacity: unset;
			}
			button {
				opacity: unset;
				display: flex;
			}
		}
	}
`;

export const Footer = styled.div`
	width: 100%;
	height: 5%;
	display: flex;
	justify-content: space-between;
	font-size: 18px;

	@media screen and (max-width: 50px) {
		width: 80%;
		font-size: 14px;
	}
`;

export const Name = styled.span`
	width: 90%;
	margin-bottom: 15px;
`;

export const Price = styled.span`
	width: 10%;
`;
