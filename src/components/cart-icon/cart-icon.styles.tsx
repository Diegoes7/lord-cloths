import styled from "styled-components";
import { ReactComponent as ShoppingSvg } from "../../assets/shopping-bag.svg";

export const CartIconContainer = styled.div`
	width: 45px;
	height: 45px;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	margin-left: 0.5rem;
`;

export const ShoppingIcon = styled(ShoppingSvg)`
	width: 24px;
	height: 24px;

	&:hover {
		transform: scale(1.5);
		transition: ease-in-out 0.7s;
		background-color: #9b9a9a;
		padding: 0.2rem;
		border-radius: 0.2rem;
	}
`;

export const ItemCount = styled.span`
	position: absolute;
	font-size: 10px;
	font-weight: bold;
	bottom: 12px;
`;
