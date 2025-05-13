'use client';

import { useAppContext } from '@/context/AppContext';

const CartCard = ({ item }) => {
	const { removeFromCart } = useAppContext();

	return (
		<div className='card card-side bg-base-300 shadow-sm'>
			<figure className='w-1/4'>
				<img
					src={item.image}
					alt={item.title}
					className='w-full h-56 object-contain bg-white'
				/>
			</figure>
			<div className='card-body w-3/4'>
				<h2 className='card-title'>{item.title}</h2>
				<p className='text-lg font-bold'>€{item.price}</p>
				<p className='text-lg'>Quantity: {item.quantity}</p>
				<div className='card-actions justify-end'>
					<button
						className='btn btn-primary'
						onClick={() => removeFromCart(item)}
					>
						Remove product
					</button>
				</div>
			</div>
		</div>
	);
};

export default CartCard;
