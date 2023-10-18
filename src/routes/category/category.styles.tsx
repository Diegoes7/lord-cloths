import styled from 'styled-components'

export const CategoryContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 50px 20px;
	border: 0.2rem solid black;
	padding: 1rem;
	border-radius: 1.25rem;

	@media screen and (max-width: 800px) {
		grid-template-columns: repeat(2, 1fr);
		gap: 1.5rem;
	}
`
export const CategoryTitle = styled.h2`
	font-size: 25px;
	text-align: center;
	color: white;
	width: 20%;
	background-color: black;
	border-radius: 20px;
	padding: .65rem ;
`
export const HeaderContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 2rem;
`
