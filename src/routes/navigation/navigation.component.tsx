import { Fragment, useCallback } from 'react'
import { Outlet } from 'react-router-dom'
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
} from './navigation.styles'

const Navigation = () => {
	const dispatch = useDispatch()

	const currentUser = useSelector(selectCurrentUser)
	const showCart = useSelector(selectShowCart)

	const signOutUser = () => dispatch(signOutStart())

	const welcomeMessage = useCallback(() => {
		const setProp =
			currentUser?.displayName === null
				? currentUser.email
				: currentUser?.displayName
		if (setProp) {
			return (
				<WelcomeMessage>
					{' '}
					<WelcomeMessageText>
						{' '}
						{setProp.toUpperCase()} is logged in.
					</WelcomeMessageText>
				</WelcomeMessage>
			)
		} else {
			return ''
		}
	}, [currentUser?.displayName, currentUser?.email])

	return (
		<Fragment>
			<NavigationContainer>
				<LogoContainer to='/'>
					<CrwnLogo className='logo' />
				</LogoContainer>
				<NavLinks>
					<NavLinkCustom to='/shop'>SHOP</NavLinkCustom>
					{currentUser ? (
						<NavLinkCustom as='span' onClick={signOutUser}>
							SIGN OUT
						</NavLinkCustom>
					) : (
						<NavLinkCustom to='/auth'>SIGN IN</NavLinkCustom>
					)}
					<NavLinkCustom to='/contact'>CONTACT</NavLinkCustom>
					<CartIcon />
				</NavLinks>
				{showCart && <CartDropdown />}
			</NavigationContainer>
			{ currentUser && welcomeMessage()}
			<Outlet />
		</Fragment>
	)
}

export default Navigation
