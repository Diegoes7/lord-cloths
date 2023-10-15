import { useEffect, lazy, Suspense } from 'react'
import { useDispatch } from 'react-redux'

import { checkUserSession } from './store/user/user.slice'
import { Routes, Route } from 'react-router-dom'

import Spinner from './components/spinner/spinner.component'

import { GlobalStyles } from './global.styles'
import ErrorBoundary from './components/error-boundary/boundary'
import PaymentForm from './components/payment-form/payment-form.component'

const Home = lazy(() => import('./routes/home/home.component'))
const Navigation = lazy(
	() => import('./routes/navigation/navigation.component')
)
const Shop = lazy(() => import('./routes/shop/shop.component'))
const Checkout = lazy(() => import('./routes/checkout/checkout.component'))
const Authentication = lazy(
	() => import('./routes/authentication/authentication.component')
)
const ContactPage = lazy(
	() => import('./routes/contact-page/contact-page.component')
)

const App = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(checkUserSession())
	}, [dispatch])

	return (
		<ErrorBoundary>
			<Suspense fallback={<Spinner />}>
				<GlobalStyles />
				<Routes>
					<Route path='/' element={<Navigation />}>
						<Route index element={<Home />} />
						<Route path='shop/*' element={<Shop />} />
						<Route path='auth' element={<Authentication />} />
						<Route path='checkout' element={<Checkout />} />
						<Route path='contact' element={<ContactPage />} />
						<Route path='payment' element={<PaymentForm />} />
					</Route>
				</Routes>
			</Suspense>
		</ErrorBoundary>
	)
}

export default App
