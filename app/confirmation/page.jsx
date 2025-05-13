'use client';

import { useAppContext } from '@/context/AppContext';
import { useEffect } from 'react';
const ConfirmationPage = () => {
	const { checkoutData, cartTotal, setCart, setCartTotal, setCheckoutData } =
		useAppContext();

	useEffect(() => {
		const clearState = () => {
			localStorage.removeItem('cart');
			setCart([]);
			setCartTotal(0);
			setCheckoutData({
				name: '',
				email: '',
				address: '',
				phone: '',
				city: '',
				paymentMethod: 'paypal',
			});
		};

		// Clear on mount
		clearState();

		// Add router event listener for route changes
		window.addEventListener('beforeunload', clearState);
		window.addEventListener('popstate', clearState);

		return () => {
			window.removeEventListener('beforeunload', clearState);
			window.removeEventListener('popstate', clearState);
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
		</div>
	);
};

export default ConfirmationPage;
