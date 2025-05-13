'use client';

import { useAppContext } from '@/context/AppContext';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const CheckoutPage = () => {
	const { checkoutData, updateCheckoutData } = useAppContext();
	const router = useRouter();
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsSubmitted(true);

		// Check if all required fields are filled
		const requiredFields = [
			'name',
			'email',
			'phone',
			'address',
			'city',
			'paymentMethod',
		];
		const isFormValid = requiredFields.every((field) =>
			checkoutData[field]?.trim()
		);

		if (!isFormValid) {
			return;
		}

		// If all fields are filled, proceed to confirmation
		router.push('/confirmation');
	};

	const getInputClass = (fieldName) => {
		const baseClass = 'input input-bordered w-full';
		if (isSubmitted && !checkoutData[fieldName]?.trim()) {
			return `${baseClass} input-error`;
		}
		return baseClass;
	};

	return (
		<div className='container mx-auto px-4 py-8'>
			<h1 className='text-3xl font-bold mb-8'>Checkout</h1>
			<form onSubmit={handleSubmit} className='max-w-md mx-auto space-y-6'>
				<div className='space-y-4'>
					<div className='form-control'>
						<label className='label'>
							<span className='label-text'>Full Name</span>
						</label>
						<input
							type='text'
							name='name'
							value={checkoutData.name}
							onChange={(e) => updateCheckoutData('name', e.target.value)}
							className={getInputClass('name')}
							required
						/>
					</div>

					<div className='form-control'>
						<label className='label'>
							<span className='label-text'>Email</span>
						</label>
						<input
							type='email'
							name='email'
							value={checkoutData.email}
							onChange={(e) => updateCheckoutData('email', e.target.value)}
							className={getInputClass('email')}
							required
						/>
					</div>

					<div className='form-control'>
						<label className='label'>
							<span className='label-text'>Phone number</span>
						</label>
						<input
							type='text'
							name='phone'
							value={checkoutData.phone}
							onChange={(e) => updateCheckoutData('phone', e.target.value)}
							className={getInputClass('phone')}
							required
						/>
					</div>

					<div className='form-control'>
						<label className='label'>
							<span className='label-text'>Address</span>
						</label>
						<input
							type='text'
							name='address'
							value={checkoutData.address}
							onChange={(e) => updateCheckoutData('address', e.target.value)}
							className={getInputClass('address')}
							required
						/>
					</div>

					<div className='form-control'>
						<label className='label'>
							<span className='label-text'>City</span>
						</label>
						<input
							type='text'
							name='city'
							value={checkoutData.city}
							onChange={(e) => updateCheckoutData('city', e.target.value)}
							className={getInputClass('city')}
							required
						/>
					</div>

					<div className='form-control mt-16'>
						<label className='label'>
							<span className='label-text'>Payment Method</span>
						</label>
						<div className='flex gap-4 mt-4'>
							<label className='label cursor-pointer gap-2'>
								<input
									type='radio'
									name='paymentMethod'
									value='paypal'
									checked={checkoutData.paymentMethod === 'paypal'}
									onChange={(e) =>
										updateCheckoutData('paymentMethod', e.target.value)
									}
									className='radio radio-primary'
								/>
								<span className='label-text'>PayPal</span>
							</label>
							<label className='label cursor-pointer gap-2'>
								<input
									type='radio'
									name='paymentMethod'
									value='creditCard'
									checked={checkoutData.paymentMethod === 'creditCard'}
									onChange={(e) =>
										updateCheckoutData('paymentMethod', e.target.value)
									}
									className='radio radio-primary'
								/>
								<span className='label-text'>Credit Card</span>
							</label>
						</div>
						{isSubmitted && !checkoutData.paymentMethod && (
							<label className='label'>
								<span className='label-text-alt text-error'>
									Please select a payment method
								</span>
							</label>
						)}
					</div>
				</div>

				<button type='submit' className='btn btn-primary w-full'>
					Place Order
				</button>
			</form>
		</div>
	);
};

export default CheckoutPage;
