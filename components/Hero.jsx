const Hero = () => {
	return (
		<div className='carousel w-full h-[60vh]'>
			<div id='slide1' className='carousel-item relative w-full'>
				<img
					src='https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
					className='w-full h-full object-cover object-center'
				/>
				<div className='absolute inset-0 bg-black opacity-30'></div>
				<div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white'>
					<h1 className='text-4xl font-bold mb-4'>Welcome to Our Store</h1>
					<p className='text-xl mb-8'>Discover our latest collection</p>
					<button className='btn btn-primary'>Shop Now</button>
				</div>
				<div className='absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between'>
					<a href='#slide3' className='btn btn-circle'>
						❮
					</a>
					<a href='#slide2' className='btn btn-circle'>
						❯
					</a>
				</div>
			</div>
			<div id='slide2' className='carousel-item relative w-full'>
				<img
					src='https://plus.unsplash.com/premium_photo-1661645473770-90d750452fa0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
					className='w-full h-full object-cover object-center'
				/>
				<div className='absolute inset-0 bg-black opacity-30'></div>
				<div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white'>
					<h1 className='text-4xl font-bold mb-4'>New Arrivals</h1>
					<p className='text-xl mb-8'>Check out our newest products</p>
					<button className='btn btn-primary'>View Collection</button>
				</div>
				<div className='absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between'>
					<a href='#slide1' className='btn btn-circle'>
						❮
					</a>
					<a href='#slide3' className='btn btn-circle'>
						❯
					</a>
				</div>
			</div>
			<div id='slide3' className='carousel-item relative w-full'>
				<img
					src='https://images.unsplash.com/photo-1591238372408-8b98667c0460?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
					className='w-full h-full object-cover object-center'
				/>
				<div className='absolute inset-0 bg-black opacity-30'></div>
				<div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white'>
					<h1 className='text-4xl font-bold mb-4'>Special Offers</h1>
					<p className='text-xl mb-8'>
						Limited time deals you don't want to miss
					</p>
					<button className='btn btn-primary'>Shop Deals</button>
				</div>
				<div className='absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between'>
					<a href='#slide2' className='btn btn-circle'>
						❮
					</a>
					<a href='#slide1' className='btn btn-circle'>
						❯
					</a>
				</div>
			</div>
		</div>
	);
};

export default Hero;
