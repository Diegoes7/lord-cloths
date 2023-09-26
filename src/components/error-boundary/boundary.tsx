import React from 'react'
import {
	ErrorImageOverlay,
	ErrorImageContainer,
	ErrorImageText,
} from './error-boundary.styles'

interface ErrorBoundaryState {
	hasError: boolean
	errorInfo: React.ErrorInfo | null
}

interface ErrorBoundaryProps {
	children: React.ReactNode
}

class ErrorBoundary extends React.Component<
	ErrorBoundaryProps,
	ErrorBoundaryState
> {
	constructor(props: ErrorBoundaryProps) {
		super(props)

		this.state = {
			hasError: false,
			errorInfo: null,
		}
	}

	static getDerivedStateFromError(error: Error): ErrorBoundaryState {
		// process the error
		return { hasError: true, errorInfo: null }
	}

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
		console.log(error)
		this.setState({ errorInfo })
	}

	render() {
		if (this.state.hasError) {
			return (
				<ErrorImageOverlay>
					<ErrorImageContainer imageUrl='https://i.imgur.com/yW2W9SC.png' />
					<ErrorImageText>Sorry, this page is broken!</ErrorImageText>
				</ErrorImageOverlay>
			)
		}
		return this.props.children
	}
}

export default ErrorBoundary
