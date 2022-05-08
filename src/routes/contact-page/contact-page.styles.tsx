import styled from "styled-components";
import { Group } from "../../components/form-input/form-input.styles";

export const ContactContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 20px;
	padding-bottom: 25px;
	width: auto;
	display: inline-block;
`;

export const MerchaintInfo = styled.div`
	display: flex;
	flex-direction: column;
`;

// export const MapContainer = styled.div`
// 	position: relative;
// 	text-align: right;
// 	height: 100%;
// 	width: 100%;
// `;

export const MapImage = styled.div`
	display: flex;
	padding: 15px;
	overflow: hidden;
	background: none !important;
	height: 500px;
	width: 70%;
	border-radius: 15px;
	gap: 15px;
`;

export const BuffInputForm = styled(Group)`
	margin: 0 10px;
`;

export const ContactFormComplaint = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-content: flex-start;
	height: 600px;

	textarea {
		height: 150px;
		width: 250px;
		margin-bottom: 10px;
	}
`;

export const MapContainerInner = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: #fbf6f6ec;
	border-radius: 15px;
	padding: 15px;
`;

export const ParagraphContainer = styled.div`
	margin-top: 20px;
	background-color: #2bc85a;
	color: white;
	padding: 20px;
	border-radius: 15px;
`;
