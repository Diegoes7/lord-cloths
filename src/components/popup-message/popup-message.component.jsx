import {
	ModalView,
	ModalStyles,
	PopupButtonStyles,
} from "./popup-message.styles";

const PopupMessage = ({ showModalProp, setShowModal }) => {
	return (
		showModalProp && (
			<ModalStyles>
				<ModalView>
					<h2> Issue Send Success. Will respond as soon as possible </h2>
					<PopupButtonStyles onClick={() => setShowModal((prev) => !prev)}>
						Close
					</PopupButtonStyles>
				</ModalView>
			</ModalStyles>
		)
	);
};

export default PopupMessage;
