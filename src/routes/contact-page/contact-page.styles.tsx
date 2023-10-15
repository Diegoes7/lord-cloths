import styled from 'styled-components'
import { Group } from '../../components/form-input/form-input.styles'

export const ContactContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 1rem 0;
	padding-bottom: 25px;
	width: 100%;
	display: inline-block;

	@media screen and (max-width: 540px) {
		margin: 0px;
		align-items: center;
		justify-content: center;
	}
`

export const MerchantInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	border: 0.2rem solid black;
	border-radius: 0.75rem;
	padding: 0.25rem 0;
	text-decoration: underline;
`

// export const MapContainer = styled.div`
// 	position: relative;
// 	text-align: right;
// 	height: 100%;
// 	width: 100%;
// `;

export const MapImage = styled.div`
	display: flex;
	flex-direction: column;
	padding: 2rem;
	overflow: hidden;
	background: none !important;
	height: 35rem;
	border-radius: 2rem;
`

export const BuffInputForm = styled(Group)`
	margin: 0 0.625rem;
`

export const ContactFormComplaint = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-content: flex-start;
	height: 37.5rem;
	text-decoration: underline;

	textarea {
		height: 9.375rem;
		width: 20.625rem;
		margin-bottom: 0.625rem;
	}
`

export const MapContainerInner = styled.div`
	margin: 1.75rem 0;
	display: flex;
	align-items: center;
	justify-content: space-around;
	background-color: #d5d6dc;
	border-radius: 0.9375rem;
	padding: 0.9375rem;

	@media screen and (max-width: 900px) {
		flex-direction: column;
	}

	@media screen and (max-width: 700px) {
		width: 100%;
		padding: 0.2rem;
	}

	@media screen and (max-width: 530px) {
		align-items: center;
	}
`

export const ParagraphContainer = styled.div`
	margin-top: 1.75rem;
	background-color: #2bc85a;
	color: white;
	padding: 20px;
	border-radius: 15px;
`
