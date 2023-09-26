import { useState, FormEvent, ChangeEvent } from 'react'

import FormInput from '../../components/form-input/form-input.component'
import Button from '../../components/button/button.component'
import PopupMessage from '../../components/popup-message/popup-message.component'

import {
	ContactContainer,
	ContactFormComplaint,
	MapContainerInner,
	MerchantInfo,
	MapImage,
	ParagraphContainer,
	BuffInputForm,
} from './contact-page.styles'
import { AnyAction } from 'redux'

export type FieldsProps = {
	email: string
	complaint: string
}

export const defaultComplaintFields: FieldsProps = {
	email: '',
	complaint: '',
}

const ContactPage = () => {
	const [showModalProp, setShowModal] = useState(false)

	const [complaintFields, setComplaintFields] = useState(defaultComplaintFields)
	const { email, complaint } = complaintFields

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		try {
			setShowModal(true)
		} catch (error) {
			alert('Error in complaint creation')
		}
	}

	const handleChange = (event: ChangeEvent<HTMLInputElement> | AnyAction) => {
		// get information out of event {}
		const { name, value } = event.target

		//spread the {} and modify one value of this {}
		setComplaintFields({ ...complaintFields, [name]: value })
	}

	return (
		<ContactContainer>
			<MerchantInfo>
				<h1>CONTACT US: DragonFlight Ltd.</h1>
				<h2>
					{' '}
					Chairman: <strong>Diego (X) ElRey</strong>
				</h2>
				<h2>
					Mobile Phone: <span>+0054654645890</span>
				</h2>
				<h2>Address: San Francisco, Portal to Castle Black, 777</h2>
			</MerchantInfo>
			<MapContainerInner>
				<MapImage>
					<div style={{ margin: '0.5rem' }}>
						<span>Here, We wait you in our shop</span>
					</div>
					<iframe
						title={'diego'}
						width='400'
						height='500'
						style={{ borderRadius: '0.75rem' }}
						id='gmap_canvas'
						src='https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed'
						frameBorder='0'
						scrolling='no'
					></iframe>
				</MapImage>
				<ContactFormComplaint onSubmit={handleSubmit}>
					<h2>Contact Form</h2>
					<BuffInputForm>
						<FormInput
							label='Contact Email'
							type='email'
							name='email'
							value={'info.complaint.shop@gmail.com'}
							required
							onChange={handleChange}
						/>
						<FormInput
							label='Email'
							type='email'
							name='email'
							value={email}
							required
							onChange={handleChange}
						/>
						<h2> Type Issue here</h2>
						<textarea
							placeholder='Type here'
							name='complaint'
							value={complaint}
							required
							onChange={handleChange}
							style={{ borderRadius: '0.75rem', padding: '.5rem' }}
						/>
						<Button type='submit'>Send</Button>
					</BuffInputForm>
				</ContactFormComplaint>
			</MapContainerInner>
			{showModalProp && (
				<PopupMessage
					showModalProp={showModalProp}
					setShowModal={setShowModal}
					complaint={complaint}
					email={email}
					setState={setComplaintFields}
				/>
			)}
			<ParagraphContainer>
				<h2> Company Major Information</h2>
				It is a long established fact that a reader will be distracted by the
				readable content of a page when looking at its layout. The point of
				using Lorem Ipsum is that it has a more-or-less normal distribution of
				letters, as opposed to using 'Content here, content here', making it
				look like readable English. Many desktop publishing packages and web
				page editors now use Lorem Ipsum as their default model text, and a
				search for 'lorem ipsum' will uncover many web sites still in their
				infancy. Various versions have evolved over the years, sometimes by
				accident, sometimes on purpose (injected humour and the like).
			</ParagraphContainer>
		</ContactContainer>
	)
}

export default ContactPage
