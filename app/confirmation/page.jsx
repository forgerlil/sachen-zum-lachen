'use client';

import { useAppContext } from '@/context/AppContext';
import Link from 'next/link';
import { useEffect } from 'react';

const ConfirmationPage = () => {
	const { checkoutData, cartTotal, setCart, setCartTotal, setCheckoutData } =
		useAppContext();

	useEffect(() => {
		return () => {
			localStorage.removeItem('checkout');
			localStorage.removeItem('cart');
			setCheckoutData({
				name: '',
				email: '',
				address: '',
				phone: '',
				city: '',
				paymentMethod: 'paypal',
			});
			setCart([]);
			setCartTotal(0);
		};
	}, []);

	return (
		<div className='container mx-auto px-4 py-8'>
			<h1 className='text-3xl font-bold mb-8'>Order Confirmation</h1>
			<p className='text-lg mb-4'>
				Thank you for your order! A confirmation email has been sent to{' '}
				{checkoutData.email}.
			</p>
			<p className='text-lg mb-4'>
				Order ID: {Math.floor(10000000 + Math.random() * 90000000)}
			</p>
			<p className='text-lg mb-4'>
				Order Date: {new Date().toLocaleDateString()}
			</p>
			<p className='text-lg mb-4'>Order Total: €{cartTotal}</p>
			<Link href='/' className='btn btn-primary'>
				Back to home
			</Link>
		</div>
	);
};

export default ConfirmationPage;
