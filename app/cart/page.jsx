'use client';

import Link from 'next/link';
import { useAppContext } from '@/context/AppContext';
import CartCard from '@/components/CartCard';

const CartPage = () => {
	const { cart, cartTotal } = useAppContext();

	if (cart.length === 0) {
		return (
			<div className='max-w-[768px] mx-auto mt-20'>
				<h2 className='text-2xl font-bold my-4'>Cart</h2>
				<div className='flex flex-col items-center justify-center'>
					<p className='text-center text-lg mt-20'>No items in cart</p>
					<Link className='btn btn-primary mt-8' href='/'>
						Browse our catalogue
					</Link>
				</div>
			</div>
		);
	}

	return (
		<div className='max-w-[768px] mx-auto mt-20'>
			<h2 className='text-2xl font-bold my-4'>Cart</h2>
			<div className='max-w-[640px] mx-auto flex flex-col gap-4'>
				{cart.map((item) => (
					<CartCard key={item.id} item={item} />
				))}
			</div>
			<div className='max-w-[640px] mx-auto flex flex-col gap-4 mt-16 items-end'>
				<p className='text-lg font-bold'>Total: €{cartTotal}</p>
				<Link className='btn btn-primary w-fit' href='/checkout'>
					Checkout
				</Link>
			</div>
		</div>
	);
};

export default CartPage;
