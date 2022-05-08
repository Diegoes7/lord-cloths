import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { signOutStart } from "../../store/user/user.action";
import { selectShowCart } from "../../store/cart/cart.selector";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { selectCurrentUser } from "../../store/user/user.selector";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import {
	NavigationContainer,
	LogoContainer,
	NavLinks,
	NavLink,
} from "./navigation.styles";

const Navigation = () => {
	const dispatch = useDispatch();

	const currentUser = useSelector(selectCurrentUser);
	const showCart = useSelector(selectShowCart);

	const signOutUser = () => dispatch(signOutStart());

	return (
		<Fragment>
			<NavigationContainer>
				<LogoContainer to="/">
					<CrwnLogo className="logo" />
				</LogoContainer>
				<NavLinks>
					<NavLink to="/shop">SHOP</NavLink>
					{currentUser ? (
						<NavLink as="span" onClick={signOutUser}>
							SIGN OUT
						</NavLink>
					) : (
						<NavLink to="/auth">SIGN IN</NavLink>
					)}
					<NavLink to="/contact">CONTACT</NavLink>
					<CartIcon />
				</NavLinks>
				{showCart && <CartDropdown />}
			</NavigationContainer>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;
