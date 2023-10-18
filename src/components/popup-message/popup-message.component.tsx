import {
	FieldsProps,
	defaultComplaintFields,
} from '../../routes/contact-page/contact-page.component'
import { ModalView, PopupButtonStyles, Overlay } from './popup-message.styles'

type Props = {
	showModalProp: boolean
	setShowModal: (value: boolean) => void
	complaint: string
	email: string
	setState: (props: FieldsProps) => void
}

const PopupMessage = ({
	showModalProp,
	setShowModal,
	complaint,
	email,
	setState,
}: Props) => {
	const resetFormFields = () => setState(defaultComplaintFields)

	const handleClose = () => {
		resetFormFields()
		setShowModal(!showModalProp)
	}
	return (
		<Overlay>
			{/* <ModalStyles> */}
			<ModalView>
				<h2> From email: "{email}".</h2>
				<h2>Complaint: {complaint} received.</h2>
				<h2>
					{' '}
					Issue Successful Sent. We're going to resolve it as soon as possible.{' '}
				</h2>
				<PopupButtonStyles onClick={handleClose}>Close</PopupButtonStyles>
			</ModalView>
			{/* </ModalStyles> */}
		</Overlay>
	)
}

export default PopupMessage
