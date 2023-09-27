import { FC } from 'react'
import ProductCard from '../product-card/product-card.component'
import { CategoryItem } from '../../store/categories/category.types'

import {
	CategoryPreviewContainer,
	Preview,
	Title,
} from './category-preview.styles'

type CategoryPreviewProps = {
	title: string
	products: CategoryItem[]
}

const CategoryPreview: FC<CategoryPreviewProps> = ({ title, products }) => {
	return (
		<CategoryPreviewContainer>
			<Title to={title}>
				<span>{title.toUpperCase()}</span>
			</Title>
			<Preview>
				{products
					.filter((_, idx) => idx < 4)
					.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
			</Preview>
		</CategoryPreviewContainer>
	)
}

export default CategoryPreview
