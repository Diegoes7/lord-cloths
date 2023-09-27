import { useState, useEffect, Fragment, useCallback } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import {
	selectIsLoading,
	selectCategoriesMap,
} from '../../store/categories/category.selector'
import Spinner from '../../components/spinner/spinner.component'
import ProductCard from '../../components/product-card/product-card.component'
import {
	CategoryContainer,
	CategoryTitle,
	HeaderContainer,
} from './category.styles'
import Button, {
	BUTTON_TYPE_CLASSES,
} from '../../components/button/button.component'

type CategoryRouteParams = {
	category: string
}

const Category = () => {
	const { category } = useParams<
		keyof CategoryRouteParams
	>() as CategoryRouteParams
	const categoriesMap = useSelector(selectCategoriesMap)
	const isLoading = useSelector(selectIsLoading)
	const [products, setProducts] = useState(categoriesMap[category])
	const navigate = useNavigate()

	const handleNavigate = useCallback(() => navigate('..'), [navigate])

	useEffect(() => {
		setProducts(categoriesMap[category])
	}, [category, categoriesMap])

	return (
		<Fragment>
			<HeaderContainer>
				<CategoryTitle>{category}</CategoryTitle>
				<Button
					buttonType={BUTTON_TYPE_CLASSES.inverted}
					onClick={handleNavigate}
				>
					Back
				</Button>
			</HeaderContainer>
			{isLoading ? (
				<Spinner />
			) : (
				<CategoryContainer>
					{products &&
						products.map((product) => (
							<ProductCard key={product.id} product={product} />
						))}
				</CategoryContainer>
			)}
		</Fragment>
	)
}

export default Category
