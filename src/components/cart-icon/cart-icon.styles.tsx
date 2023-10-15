import styled, { css } from 'styled-components'
import { ReactComponent as ShoppingSvg } from '../../assets/shopping-bag.svg'

const hoverStyles = css`
	transform: scale(1.5);
	transition: ease-in-out 0.7s;
	background-color: #d3eaf4;
	padding: 0.1rem;
	border-radius: 0.2rem;
	border-bottom: 0.2rem solid black;
`

export const CartIconContainer = styled.div`
	width: 45px;
	height: 45px;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	margin-left: 0.5rem;
`

export const ShoppingIcon = styled(ShoppingSvg).attrs({
	activeclassname: 'active',
})`
	width: 24px;
	height: 24px;

	&:hover {
		${hoverStyles}
	}

	&.active {
		${hoverStyles}
	}
`

export const ItemCount = styled.span`
	position: absolute;
	font-size: 10px;
	font-weight: bold;
	bottom: 12px;
`
