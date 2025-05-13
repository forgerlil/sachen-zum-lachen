'use client';

import { useState } from 'react';
import { useAppContext } from '@/context/AppContext';

const ProductCard = ({ product }) => {
	const [quantity, setQuantity] = useState(1);
	const { addToCart } = useAppContext();

	const incrementQuantity = () => {
		setQuantity((prev) => prev + 1);
	};

	const decrementQuantity = () => {
		setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
	};

	const handleAddToCart = () => {
		addToCart(product, quantity);
	};

	return (
		<div className='card bg-base-300 w-96 shadow-sm'>
			<figure>
				<img
					src={product.image}
					alt={product.title}
					className='w-full h-96 object-contain bg-white'
				/>
			</figure>
			<div className='card-body'>
				<h2 className='card-title mb-2'>{product.title}</h2>
				<div className='flex items-center justify-between'>
					<div className='flex flex-col gap-2'>
						<p className='text-lg font-bold'>${product.price}</p>
						<div className='flex items-center gap-2'>
							<button
								className='btn btn-circle btn-sm btn-info'
								onClick={decrementQuantity}
							>
								-
							</button>
							<span className='text-lg font-semibold'>{quantity}</span>
							<button
								className='btn btn-circle btn-sm btn-info'
								onClick={incrementQuantity}
							>
								+
							</button>
						</div>
					</div>
					<button className='btn btn-primary' onClick={handleAddToCart}>
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
