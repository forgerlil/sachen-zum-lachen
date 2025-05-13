'use client';

import { createContext, useState, useContext, useEffect } from 'react';

const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	const [cartTotal, setCartTotal] = useState(0);
	const [products, setProducts] = useState([]);
	const [checkoutData, setCheckoutData] = useState({
		name: '',
		email: '',
		address: '',
		phone: '',
		city: '',
		paymentMethod: 'paypal',
	});

	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then((res) => res.json())
			.then((data) => setProducts(data));

		setCart(
			localStorage.getItem('cart')
				? JSON.parse(localStorage.getItem('cart'))
				: []
		);
	}, []);

	useEffect(() => {
		setCartTotal(
			Number(
				cart
					.reduce((total, item) => total + item.price * item.quantity, 0)
					.toFixed(2)
			)
		);
	}, [cart]);

	const updateCheckoutData = (field, value) => {
		setCheckoutData((prev) => ({ ...prev, [field]: value }));
	};

	const addToCart = (product, quantity) => {
		const newCart = [...cart, { ...product, quantity }];
		setCart(newCart);
		localStorage.setItem('cart', JSON.stringify(newCart));
	};

	const removeFromCart = (product) => {
		const updatedCart = cart.filter((item) => item.id !== product.id);
		setCart(updatedCart);
		localStorage.setItem('cart', JSON.stringify(updatedCart));
	};

	return (
		<AppContext.Provider
			value={{
				cart,
				setCart,
				setCartTotal,
				products,
				addToCart,
				removeFromCart,
				cartTotal,
				checkoutData,
				setCheckoutData,
				updateCheckoutData,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
