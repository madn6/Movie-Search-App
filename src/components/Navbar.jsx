import React from 'react';
import NavbarItem from './NavbarItem';

export default function Navbar() {
	return (
		<div className='flex items-center dark:text-gray-100 justify-center mt-6 border border-gray-300 gap-12 p-4 lg:text-lg bg-gray-200'>  
			<NavbarItem title="Trending" param="fetchTrending" />
			<NavbarItem title="Top Rated" param="fetchTopRated" />
		</div>
	);
}
