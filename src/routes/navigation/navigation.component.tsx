import { Fragment, useCallback } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { signOutStart } from '../../store/user/user.slice'
import { selectShowCart } from '../../store/cart/cart.selector'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import { selectCurrentUser } from '../../store/user/user.selector'

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'

import {
	NavigationContainer,
	LogoContainer,
	NavLinks,
	NavLinkCustom,
	WelcomeMessage,
	WelcomeMessageText,
	ReloadToGetFirebaseAccountInfoStyles,
	ReloadTitle,
} from './navigation.styles'
import Button, {
	BUTTON_TYPE_CLASSES,
} from '../../components/button/button.component'
import React from 'react'

const Navigation = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const currentUser = useSelector(selectCurrentUser)
	const showCart = useSelector(selectShowCart)

	const signOutUser = React.useCallback(() => {
		dispatch(signOutStart())
		navigate('/auth')
	}, [dispatch, navigate])

	const welcomeMessage = useCallback(() => {
		const setProp =
			currentUser?.displayName === null
				? currentUser.email
				: currentUser?.displayName
		if (setProp) {
			return (
				<WelcomeMessage>
					<WelcomeMessageText>
						{setProp.toUpperCase()} is logged in.
					</WelcomeMessageText>
					<Button
						title='Log out your account'
						style={{ height: '2.3rem', minWidth: ' 1rem' }}
						buttonType={BUTTON_TYPE_CLASSES.inverted}
						onClick={signOutUser}
					>
						Sign out
					</Button>
				</WelcomeMessage>
			)
		} else {
			return <ReloadToGetFirebaseAccountInfo />
		}
	}, [currentUser?.displayName, currentUser?.email, signOutUser])

	return (
		<Fragment>
			<NavigationContainer>
				<LogoContainer title='Go to Home Page' to='/'>
					<CrwnLogo className='logo' />
				</LogoContainer>
				<NavLinks>
					<NavLinkCustom to='/shop'>SHOP</NavLinkCustom>
					<NavLinkCustom to='/auth'>SIGN IN</NavLinkCustom>
					{/* {currentUser ? (
						<NavLinkCustom to='/auth'>SIGN OUT</NavLinkCustom>
					) : (
						<NavLinkCustom to='/auth'>SIGN IN</NavLinkCustom>
					)} */}
					<NavLinkCustom to='/contact'>CONTACT</NavLinkCustom>
					<CartIcon />
				</NavLinks>
				{showCart && <CartDropdown />}
			</NavigationContainer>
			{currentUser && welcomeMessage()}
			<Outlet />
		</Fragment>
	)
}

function ReloadToGetFirebaseAccountInfo() {
	return (
		<ReloadToGetFirebaseAccountInfoStyles>
			<ReloadTitle>'Fetching Information...'</ReloadTitle>
			<Button
				title='Click to get firebase account info'
				style={{ height: '2rem', minWidth: ' 1rem' }}
				onClick={() => window.location.reload()}
			>
				{' '}
				Reload
			</Button>
		</ReloadToGetFirebaseAccountInfoStyles>
	)
}

export default Navigation
