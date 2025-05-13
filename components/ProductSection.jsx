'use client';

import ProductCard from './ProductCard';
import { useAppContext } from '@/context/AppContext';

const ProductSection = () => {
	const { products } = useAppContext();

	return (
		<div className='max-w-7xl mx-auto mt-20'>
			<h2 className='text-2xl font-bold ml-8 my-4'>Browse our Products</h2>
			<div className='flex flex-wrap justify-center gap-4'>
				{products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</div>
	);
};

export default ProductSection;
