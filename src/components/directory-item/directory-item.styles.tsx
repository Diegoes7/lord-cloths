import styled from "styled-components";

type BackgroundImageProps = {
	imageUrl: string;
};

export const BackgroundImage = styled.div<BackgroundImageProps>`
	width: 100%;
	height: 100%;
	background-size: cover;
	background-position: center;
	// pass as a prop and render in css
	background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const Body = styled.div`
	height: 90px;
	padding: 0 25px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border: 1px solid black;
	background-color: white;
	opacity: 0.7;
	position: absolute;
	border-radius: 12px;

	h2 {
		font-weight: bold;
		margin: 0 6px 0;
		font-size: 22px;
		color: #4a4a4a;
		text-transform: uppercase;
	}

	p {
		font-weight: lighter;
		font-size: 16px;
	}

	@media screen and (max-width: 660px) {
		padding: 10px 10px;
		margin: 0;
	}

	@media screen and (max-width: 400px) {
		padding: 5px 5px;
		margin: 0;
	}
`;
export const DirectoryItemContainer = styled.div`
	min-width: 30%;
	height: 240px;
	flex: 1 1 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid black;
	margin: 0 7.5px 15px;
	overflow: hidden;
	border-radius: 12px;

	&:hover {
		cursor: pointer;

		& ${BackgroundImage} {
			transform: scale(1.1);
			transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
		}

		& ${Body} {
			opacity: 0.9;
		}
	}

	&:first-child {
		margin-right: 7.5px;
	}

	&:last-child {
		margin-left: 7.5px;
	}
`;
